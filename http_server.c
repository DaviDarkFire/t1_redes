#include <errno.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <time.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <sys/wait.h>
#include <netinet/in.h>
#include <fcntl.h>
#include <pthread.h>
#include <signal.h>
#include "request_handler.c"
#include <semaphore.h>
#include <dirent.h>
#include "cgi_bin.c"

#define LISTEN_ENQ 5
#define HTTP_D 1
#define FORKORTHREAD 2
#define NTHREADS 3
#define PORTF 3
#define PORTT 4
#define FORK 0
#define THREAD 1
#define BUFFSIZE 1024

#define BADREQUESTCASE 0
#define OKCASE 1
#define NOTFOUNDCASE 2

sem_t mutex;

void sendFile(char * filePath, int sockfd);
int checkFileExistence(char* filePath);
void sendResponseHeader(int responseCase, char* core, int sockfd, int connection);
char * getDocType(char *filePath);
char* getContentLen(char* filePath);
int createSocket(int port);
void forkExecution(int sockfd);
void serverRespond(int connfd);
void threadExecution(int sockfd, int n);
void* threadRoutine(void *arg);
void handleSIGCHLD(int signal);
void sendDirectory(int connfd, char* dirPath);
char* treatPath(char* path);
void sendRedirectPage(int connfd, char* dirPath);

int main(int argc, char** argv) {


	int forkOrThread;
	int sockfd;
	int port;

	if((strcmp(argv[HTTP_D], "httpd") == 0) && (strcmp(argv[FORKORTHREAD], "-f") == 0)){
		forkOrThread = FORK;
		if(argc == 4) port = atoi(argv[PORTF]);
		else port = 8080;
	}
	else if((strcmp(argv[HTTP_D], "http") == 0) && (strcmp(argv[FORKORTHREAD], "-t") == 0)){
		forkOrThread = THREAD;
		if(argc == 5) port = atoi(argv[PORTT]);
		else port = 8080;
	}
	else {
		fprintf(stderr, "Usage: %s <-f or -t> <if -t, n. of threads> <port>\n", argv[0]);
		exit(1);
	}

	sockfd = createSocket(port);

	if(listen(sockfd, LISTEN_ENQ) < 0) { //escuta requisições ao server
		fprintf(stderr, "ERROR: %s\n", strerror(errno));
		exit(1);
	}

	// lidando com processos zumbis
	// referencia: http://www.microhowto.info/howto/reap_zombie_processes_using_a_sigchld_handler.html
	if(forkOrThread == FORK){
		struct sigaction sa;
		sa.sa_handler = &handleSIGCHLD;
		sigemptyset(&sa.sa_mask);
		sa.sa_flags = SA_RESTART | SA_NOCLDSTOP;
		if (sigaction(SIGCHLD, &sa, 0) == -1) {
	  	perror(0);
	  	exit(1);
		}
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

// http://www.microhowto.info/howto/reap_zombie_processes_using_a_sigchld_handler.html
void handleSIGCHLD(int signal) {
  int saved_errno = errno;
	// WNOHANG garante que o handler não será bloqueante
  while (waitpid((pid_t)(-1), 0, WNOHANG) > 0) {}
  errno = saved_errno;
}


void sendFile(char *filePath, int sockfd){
	char buffer[BUFFSIZE];
	int bytesRead, bytesSent;
	int fd = open(filePath, O_RDONLY);

	while(1){
		memset(buffer, 0, sizeof(buffer));
		bytesRead = read(fd, buffer, sizeof(buffer));
		if(bytesRead < 0){
			fprintf(stderr, "ERROR: %s\n", strerror(errno));
			exit(1);
		} else if(bytesRead == 0){
			close(fd);
			break;
		} else {
			bytesSent = send(sockfd, buffer, bytesRead, 0);
			while(bytesSent < bytesRead){
				bytesSent += send(sockfd, buffer + bytesSent, bytesRead - bytesSent, 0);
			}
		}
	}
}

char* treatPath(char* path){

    if(path[0] == '/'){
    	return path+1;

	}
	return path;

}

int checkFileExistence(char* filePath){
    FILE *file;
    file = fopen(filePath, "rb");
    if (file)
    {
        fclose(file);
        return 1;
    }
    return 0;
}

void sendResponseHeader(int responseCase, char* core, int sockfd, int connection){
	// Dados de Date:
	// char date[29];
  // time_t now = time(0);
  // struct tm tm = *gmtime(&now);
  // strftime(date, sizeof(date), "%a, %d %b %Y %H:%M:%S %Z", &tm);
	char responseHeader[BUFFSIZE];

	if(responseCase == BADREQUESTCASE){
		strcpy(responseHeader, "HTTP/1.1 400 Bad Request");
	}
	else {
		if(responseCase == OKCASE){
			strcpy(responseHeader, "HTTP/1.1 200 OK");
		}
		else{ // responseCase == NOTFOUNDCASE
			strcpy(responseHeader, "HTTP/1.1 404 Page Not Found");
		}
	}
	// strcat(responseHeader, "\r\n");
	// strcat(responseHeader, "Date: ");
	// strcat(responseHeader, date);
	strcat(responseHeader, "\r\n");
	strcat(responseHeader, "Server: FACOMRC-2018/1.0");
	strcat(responseHeader, "\r\n");
	strcat(responseHeader, "Content-Length: ");
	strcat(responseHeader, getContentLen(core));
	strcat(responseHeader, "\r\n");
	strcat(responseHeader, "Content-Type: ");
	strcat(responseHeader, getDocType(core));
	strcat(responseHeader, "\r\n");
	if(connection == KEEPALIVECONN)
		strcat(responseHeader, "Connection: keep-alive");
	else
		strcat(responseHeader, "Connection: close");
	strcat(responseHeader, "\r\n");
	strcat(responseHeader, "\r\n\0");
	send(sockfd, responseHeader, strlen(responseHeader), 0);
}



char * getDocType(char *filePath){
  char * ext;
  ext = strrchr(filePath, '.');
  if(ext == NULL) return NULL;

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
  if (strcmp(ext, ".txt") == 0) return "text/plain";

  return NULL;
}

char* getContentLen(char* filePath){
	FILE *file;
	long size;

	file = fopen(filePath, "rb");
	fseek(file, 0, SEEK_END); // coloca indicador no fim do arquivo
	size = ftell(file); // pega o tamanho usando o indicador
	char* str = malloc(sizeof(char)*10);
	sprintf(str, "%d", (int) size);
	return str;
}

int createSocket(int port){

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
	return sockfd;
}

void forkExecution(int sockfd){
	socklen_t clilen; //tamanho do cliente
	struct sockaddr_in cli_addr; //estrutura do cliente
	pid_t pid; //id do processo
	int connfd; //file descriptor pra cada conexão de cliente

	clilen = sizeof(cli_addr);


	while(1) { //loop de conexão
		memset((char*) &cli_addr, 0, sizeof(cli_addr)); //zera o serv_addr
		connfd = accept(sockfd, (struct sockaddr*) &cli_addr, (unsigned int*) &clilen);//tenta nova conexão
		if(connfd < 0) { //verifica erro
			fprintf(stderr, "ERROR: %s\n", strerror(errno));
			exit(1);
		}

		pid = fork(); //cria um novo processo
		if(pid < 0) { //erro no fork
			fprintf(stderr, "ERROR: %s\n", strerror(errno));
			exit(1);
		}

		if(pid == 0) {
			// estamos no filho
			close(sockfd);
			serverRespond(connfd);
			close(connfd);
			return;

		} else {
			close(connfd);
		}
	}
	close(sockfd);
}

void threadExecution(int sockfd, int n){
  	pthread_t tids[n];
	int i;
	sem_init(&mutex, 0, 1);

	for(i = 0; i < n; i++){
		pthread_create(&tids[i], NULL, threadRoutine, &sockfd);
	}

	for(i = 0; i < n; i++){
			pthread_join(tids[i], NULL);
	}

	sem_destroy(&mutex);
	return;
}

void* threadRoutine(void *arg){
	socklen_t clilen; //tamanho do cliente
	struct sockaddr_in cli_addr; //estrutura do cliente
	int sockfd, connfd;

	clilen = sizeof(cli_addr);
	sockfd = *((int*) arg);
	while(1){
		sem_wait(&mutex);
		connfd = accept(sockfd, (struct sockaddr*) &cli_addr, (unsigned int*) &clilen);
		sem_post(&mutex);
		serverRespond(connfd);
		close(connfd);
	}
}

void serverRespond(int connfd){
	char buffer[BUFFSIZE];
	int n;
	int reqLineIsOK, fileExists;
	int connection;

	do{
		memset(buffer, 0, sizeof(buffer));

		do{ // ROTEIRO: esse laço serve para telnet
			n += recv(connfd, buffer+n, BUFFSIZE-n, 0);
		}while(strcmp(buffer+n-4,"\r\n\r\n") != 0);

		// n = recv(connfd, buffer, BUFFSIZE, 0); // ROTEIRO: essa linha serve para navegador

		if(n < 0) {
			fprintf(stderr, "ERROR: %s\n", strerror(errno));
			exit(1);
		}

		printf("Request recebida abaixo:\n%s\n", buffer); //DEBUG

		connection = checkConnection(buffer);

		char* requestLine = getRequestLine(buffer);

		reqLineIsOK = checkRequestLine(requestLine);

		if(!reqLineIsOK){ // bad request
			sendResponseHeader(BADREQUESTCASE, "docs/badrequest.html", connfd, CLOSECONN);
			sendFile("docs/badrequest.html", connfd); //
		}else{ // A request está em formato esperado
			char* core = getCore(requestLine);
			free(requestLine); //DEBUG
			if(strcmp(core, "/") == 0){ // tratando caso / => index
				strcpy(core, "docs/index.html");
			}

			core = treatPath(core);

			// caso cgi-bin
			if(isCGIBIN(core)){
				loadQueryString(core);
				char* scriptName = getScriptName(core);
				char scriptPath[8+strlen(scriptName)];

				strcpy(scriptPath, "cgi-bin/");
				strcat(scriptPath, scriptName);

				dup2(connfd, STDOUT_FILENO);
				dup2(connfd, STDERR_FILENO);
				close(connfd);
				char * arg[] = {NULL};

        if(execv(scriptPath, arg) < 0) {
        	fprintf(stderr, "ERROR: %s\n", strerror(errno));
          exit(1);
        }
			} else { // caso navegacao de diretorio
				if(opendir(core) != NULL){

					if(core[strlen(core)-1] != '/'){
						sendResponseHeader(OKCASE, "redirect_page.html", connfd, connection);
						sendRedirectPage(connfd, core);
					}
					sendResponseHeader(OKCASE, "listDir.html", connfd, connection);
					sendDirectory(connfd, core);

				} else { // caso requisicao de arquivo
					fileExists = checkFileExistence(core);
					if(fileExists){ // caso ok, enviar arquivo
						sendResponseHeader(OKCASE, core, connfd, connection);
						sendFile(core, connfd);
					}
					else{ // caso contrário, not found
						sendResponseHeader(NOTFOUNDCASE, "docs/notfound.html", connfd, CLOSECONN);
						sendFile("docs/notfound.html", connfd);
					}
				}
			}
		}

	} while(connection == KEEPALIVECONN);

}


void sendDirectory(int connfd, char* dirPath){
	DIR *dir;
	struct dirent *ent;
	char href[BUFFSIZE];
	FILE* dirResponse = fopen("listDir.html", "w");

	fprintf(dirResponse, "<!DOCTYPE html>");
	fprintf(dirResponse, "\r\n");
	fprintf(dirResponse, "<html>");
	fprintf(dirResponse, "\r\n");
	fprintf(dirResponse, "<head>");
	fprintf(dirResponse, "\r\n");
	fprintf(dirResponse, "<meta charset=\"UTF-8\">");
	fprintf(dirResponse, "\r\n");
	fprintf(dirResponse, "</head>");
	fprintf(dirResponse, "\r\n");
	fprintf(dirResponse, "<body>");
	fprintf(dirResponse, "\r\n");



	if ((dir = opendir (dirPath)) != NULL) {

  		while ((ent = readdir (dir)) != NULL) {

  			if (strcmp(ent->d_name,".") != 0 && strcmp(ent->d_name,"..") != 0){

  				strcpy(href, "<a href=\""); // a / serve para vir da raiz
  				if (getDocType(ent->d_name) == NULL){
  					strcat(href, ent->d_name);
  					strcat(href,"/");

  				}else{
  					strcat(href, ent->d_name);
  				}
  				strcat(href,"\">");
  				strcat(href, ent->d_name);
  				strcat(href, "</a>");
  				strcat(href, "\0");

  				fprintf(dirResponse,"%s", href);
  				fprintf(dirResponse, "<br>");
  			}
  		}

  		fprintf(dirResponse,"</body>");
  		fprintf(dirResponse,"\r\n");
		fprintf(dirResponse,"</html>");
		fprintf(dirResponse,"%c",'\0');

  		closedir (dir);
  		fclose(dirResponse);
  		sendFile("listDir.html", connfd);
	}

}

void sendRedirectPage(int connfd, char* dirPath){
	FILE* redirectionPage = fopen("redirect_page.html", "w");
	char red_link[strlen(dirPath)+1];
	strcpy(red_link,dirPath);
	strcat(red_link,"/");
	fprintf(redirectionPage, "<!DOCTYPE html>");
	fprintf(redirectionPage, "\r\n");
	fprintf(redirectionPage, "<html>");
	fprintf(redirectionPage, "\r\n");
	fprintf(redirectionPage, "<head>");
	fprintf(redirectionPage, "\r\n");
	fprintf(redirectionPage, "<meta charset=\"UTF-8\">");
	fprintf(redirectionPage, "\r\n");
	fprintf(redirectionPage, "<meta http-equiv=\"refresh\" content=\"0;/");
	fprintf(redirectionPage,"%s", red_link);
	fprintf(redirectionPage, "\" />");
	fprintf(redirectionPage, "\r\n");
	fprintf(redirectionPage, "</head>");
	fprintf(redirectionPage, "\r\n");
	fprintf(redirectionPage, "<body>");
	fprintf(redirectionPage, "\r\n");
	fprintf(redirectionPage, "</body>");
	fprintf(redirectionPage, "\r\n");
	fprintf(redirectionPage, "</html>");
	fprintf(redirectionPage,"%c",'\0');
	fclose(redirectionPage);
	sendFile("redirect_page.html", connfd);
}
