#include <errno.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <time.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <fcntl.h>
#include <pthread.h>
#include "request_handler.c"
#include <semaphore.h>

#define LISTEN_ENQ 5
#define FORKORTHREAD 1
#define PORTF 2
#define PORTT 3
#define FORK 0
#define THREAD 1
#define BUFFSIZE 1024
#define NTHREADS 2

sem_t mutex;

void sendFile(char * filePath, int sockfd);
int checkFileExistence(char* filePath);
void sendResponseHeader(int reqLineIsOK, int fileExists, char* core, int sockfd);
char * getDocType(char *filePath);
char* getContentLen(char* filePath);
int createSocket(int port);
void forkExecution(int sockfd);
void serverRespond(int connfd);
void threadExecution(int sockfd, int n);
static void *threadRoutine(void *arg);

int main(int argc, char** argv) {


	int forkOrThread;
	int sockfd;
	int port;


	if(argc < 2 || argc > 4) {
		fprintf(stderr, "Usage: %s <-f or -t> <if -t, n. of threads> <port>\n", argv[0]);
		exit(1);
	}

	if(strcmp(argv[FORKORTHREAD], "-f") == 0){
		forkOrThread = FORK;
		if(argc == 3) port = atoi(argv[PORTF]);
		else port = 8080;
	}
	else if(strcmp(argv[FORKORTHREAD], "-t") == 0){
		forkOrThread = THREAD;
		if(argc == 4) port = atoi(argv[PORTT]);
		else port = 8080;
	}
	else {
		fprintf(stderr, "Usage: %s <-f or -t> <if -t, n. of threads> <port>\n", argv[0]);
		exit(1);
	}


	sockfd = createSocket(port);


	// TODO sig chld

	if(listen(sockfd, LISTEN_ENQ) < 0) { //escuta requisições ao server
		printf("ERRO LISTEN"); //DEBUG
		fprintf(stderr, "ERROR: %s\n", strerror(errno));
		exit(1);
	}
	if(forkOrThread == FORK){
		forkExecution(sockfd);
	}
	else{
		if(forkOrThread == THREAD){
			threadExecution(sockfd, atoi(argv[NTHREADS]));
		}
	}

	return 0;
}

void sendFile(char *filePath, int sockfd){
	FILE *fileToBeSent;
	long size;
	char *sender;

	if(strcmp(filePath, "/") == 0){

		fileToBeSent = fopen("docs/index.html", "rb");

	}else{
		if(filePath[0] == '/'){
			fileToBeSent = fopen(filePath+1, "rb");
		}else{
			fileToBeSent = fopen(filePath, "rb");

		}
	}
	if(fileToBeSent){
		fseek(fileToBeSent, 0, SEEK_END); // coloca indicador no fim do arquivo
		size = ftell(fileToBeSent); // pega o tamanho usando o indicador
		rewind(fileToBeSent); // volta indicador ao início
		sender = (char *) malloc(sizeof(char) * size); // alloca espaço para mandar todo o arquivo
		fread(sender, 1, size, fileToBeSent); // armazena em sender o arquivo
		// printf("Dados do sender: %s", sender);
		int i = send(sockfd, sender, size, 0); // manda ao socket os dados que armazenamos em sender
		printf("i: %d\n", i);//DEBUG
		fclose(fileToBeSent);
		free(sender);
	}

}

int checkFileExistence(char* filePath){
    FILE *file;

    if(filePath[0] == '/'){
		file = fopen(filePath+1, "rb");
	}else{
		file = fopen(filePath, "rb");
	}
    if (file)
    {
        fclose(file);
        return 1;
    }
    return 0;
}

void sendResponseHeader(int reqLineIsOK, int fileExists, char* core, int sockfd){
	// Dados de Date:
	char date[29];
  	time_t now = time(0);
  	struct tm tm = *gmtime(&now);
  	strftime(date, sizeof(date), "%a, %d %b %Y %H:%M:%S %Z", &tm);
		char responseHeader[BUFFSIZE];

	if(!reqLineIsOK){
		printf("req line is not ok\n");//DEBUG
		strcpy(responseHeader, "HTTP/1.1 400 Bad Request");
	}
	else {
		if(fileExists){
			strcpy(responseHeader, "HTTP/1.1 200 OK");
		}
		else{
			strcpy(responseHeader, "HTTP/1.1 404 Page Not Found");
		}
	}
	strcat(responseHeader, "\r\n");
	strcat(responseHeader, "Date: "); //DEBUG
	strcat(responseHeader, date); // DEBUG
	strcat(responseHeader, "\r\n"); // DEBUG
	strcat(responseHeader, "Server: FACOMRC-2018/1.0");
	strcat(responseHeader, "\r\n");
	strcat(responseHeader, "Content-Length: ");
	strcat(responseHeader, getContentLen(core));
	strcat(responseHeader, "\r\n");
	strcat(responseHeader, "Content-Type: ");
	strcat(responseHeader, getDocType(core));
	strcat(responseHeader, "\r\n");
	strcat(responseHeader, "\r\n\0");
	printf("%s\n", responseHeader);
	send(sockfd, responseHeader, strlen(responseHeader), 0);
}



char * getDocType(char *filePath){
  char * ext;
  ext = strrchr(filePath, '.');

  if (strcmp(ext, ".html") == 0 || strcmp(ext, ".htm") == 0) return "text/html";
  if (strcmp(ext, ".jpg") == 0 || strcmp(ext, ".jpeg") == 0) return "image/jpeg";
  if (strcmp(ext, ".gif") == 0) return "image/gif";
  if (strcmp(ext, ".png") == 0) return "image/png";
  if (strcmp(ext, ".css") == 0) return "text/css";
  if (strcmp(ext, ".au") == 0) return "audio/basic";
  if (strcmp(ext, ".wav") == 0) return "audio/wav";
  if (strcmp(ext, ".avi") == 0) return "video/x-msvideo";
  if (strcmp(ext, ".mpeg") == 0 || strcmp(ext, ".mpg") == 0) return "video/mpeg";
  if (strcmp(ext, ".mp3") == 0) return "audio/mpeg";
  if (strcmp(ext, ".js") == 0) return "text/javascript";
  if (strcmp(ext, ".ico") == 0) return "image/x-icon";

  return NULL;
}

char* getContentLen(char* filePath){
	printf("entrou na content len\n");//DEBUG
	FILE *file;
	long size;

	if(filePath[0] == '/'){
		printf("tem barra\n");//DEBUG
		file = fopen(filePath+1, "rb");
	}else{
		printf("Não tem barra\n");//DEBUG
		file = fopen(filePath, "rb");
	}
	fseek(file, 0, SEEK_END); // coloca indicador no fim do arquivo
	size = ftell(file); // pega o tamanho usando o indicador
	char* str = malloc(sizeof(char)*10);
	sprintf(str, "%d", (int) size);
	printf("STR: %s\n", str);//DEBUG
	return str;

}

int createSocket(int port){ // passar argv[PORT]

	int sockfd; //file descriptor do server
	struct sockaddr_in serv_addr; //esctrutura do server

	sockfd = socket(AF_INET, SOCK_STREAM, 0); //cria o socket
	if(sockfd < 0) {
		fprintf(stderr, "ERROR: %s\n", strerror(errno));
		exit(1);
	} //se der erro aborta

	memset((char*) &serv_addr, 0, sizeof(serv_addr)); //zera o serv_addr

	serv_addr.sin_family = AF_INET; //definindo os valores do server
	serv_addr.sin_addr.s_addr = INADDR_ANY;
	serv_addr.sin_port = htons(port);//porta do servidor

	if(bind(sockfd, (struct sockaddr*) &serv_addr, sizeof(serv_addr)) < 0) { //associa socket a porta que será usada
		fprintf(stderr, "ERROR: %s\n", strerror(errno));
		exit(1);
	}
	printf("sockfd on create socket %d\n", sockfd); //DEBUG
	return sockfd;
}

void forkExecution(int sockfd){
	printf("entrou na connection with fork\n"); // DEBUG
	socklen_t clilen; //tamnho do cliente
	struct sockaddr_in cli_addr; //estrutura do cliente
	pid_t pid; //id do processo
	int connfd; //file descriptor pra cada conexão de cliente

	clilen = sizeof(cli_addr);


	while(1) { //loop d conexão
		memset((char*) &cli_addr, 0, sizeof(cli_addr)); //zera o serv_addr
		printf("sockfd: %d\n", sockfd); //DEBUG
		connfd = accept(sockfd, (struct sockaddr*) &cli_addr, (unsigned int*) &clilen);//tenta nova conexão
		printf("connfd: %d\n", connfd); //DEBUG
		if(connfd < 0) { //verifica erro
			fprintf(stderr, "ERROR: %s\n", strerror(errno));
			printf("if1\n"); // DEBUG
			exit(1);
		}

		pid = fork(); //cria um novo processo
		if(pid < 0) { //erro no fork?
			fprintf(stderr, "ERROR: %s\n", strerror(errno));
			printf("if2\n"); // DEBUG
			exit(1);
		}

		if(pid == 0) {
			// estamos no filho
			close(sockfd);
			serverRespond(connfd);
			close(connfd); // DEBUG
			return;

		} else {
			//Parent ou Child?
			close(connfd);
		}
	}
	close(sockfd);
}

void threadExecution(int sockfd, int n){ // receber N threads
	struct sockaddr_in client;
  int clilen;
  pthread_t tids[n];
	int i;
	int *iptr;
	sem_init(&mutex, 0, 1);

	for(i = 0; i < n; i++){
		iptr = (int *) malloc(sizeof(int));
		sem_wait(&mutex);
		*iptr = accept(sockfd, (struct sockaddr*) &client, &clilen);
		sem_post(&mutex);
		pthread_create(&tids[i], NULL, (void*) &threadRoutine, iptr);
			// dentro da função de execução: antes do accept: usar sem_wait(&mutex); e depois do accept: sem_post(&mutex);
	}

	for(i = 0; i < n; i++){
			pthread_join(tids[i], NULL);
	}

	sem_destroy(&mutex);

	// semaforo va para vermelho > usa accept > semaforo va para verde
	return;
}

static void *threadRoutine(void *arg){
	int connfd;
	connfd = *((int*) arg);
	// free(arg);
	pthread_detach(pthread_self());
	serverRespond(connfd);
	close(connfd);

	return NULL;
}

void serverRespond(int connfd){
	char buffer[256];
	int n;
	int reqLineIsOK, fileExists;

	memset(buffer, 0, sizeof(buffer));

	if(n = recv(connfd, buffer, sizeof(buffer), 0) < 0) {
		fprintf(stderr, "ERROR: %s\n", strerror(errno));
		printf("if3\n"); // DEBUG
		exit(1);
	}

	printf("Mensagem recebida: %s\n", buffer);

	char* requestLine = getRequestLine(buffer);

	printf("REQUESTLINE: %s\n", requestLine);
	printf("TAMANHO REQUEST LINE: %d\n", (int) strlen(requestLine));
	reqLineIsOK = checkRequestLine(requestLine);

	if(!reqLineIsOK){ // bad request
		sendResponseHeader(reqLineIsOK, 0, "docs/badrequest.html", connfd);
		sendFile("docs/badrequest.html", connfd); //
	}else{ // A request está em formato esperado
		char* core = getCore(requestLine);
		if(strcmp(core, "/") == 0){ // tratando caso / => index
			strcpy(core, "docs/index.html");
		}
		//TODO: diferenciar arquivo de pasta
		fileExists = checkFileExistence(core);
		printf("fileExists: %d\n", fileExists); // DEBUG
		if(fileExists){ // caso ok, enviar arquivo
			sendResponseHeader(reqLineIsOK, fileExists, core, connfd);
			sendFile(core, connfd);
		}
		else{ // caso contrário, not found
			sendResponseHeader(reqLineIsOK, fileExists, "docs/notfound.html", connfd);
			sendFile("docs/notfound.html", connfd);
		}
	}
}
