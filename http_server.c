#include <errno.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <sys/types.h> 
#include <sys/socket.h>
#include <netinet/in.h>
#include <fcntl.h>

#define LISTEN_ENQ 5
#define PORT 1

void sendFile(char * filePath, int sockfd);

int main(int argc, char** argv) {
	int n;
	int m;
	pid_t pid; //id do processo
	int sockfd; //file descriptor do server
	int clilen; //tamnho do cliente
	int newsockfd; //file descriptor pra cada conexão de cliente
	char buffer[256];

	struct sockaddr_in serv_addr; //esctrutura do server
	struct sockaddr_in cli_addr; //estrutura do cliente
  
	if(argc != 2) { //ensinando o user como iniciar o server 
		fprintf(stderr, "Usage: %s <port>\n", argv[0]);
		exit(1);
	}
  
	sockfd = socket(AF_INET, SOCK_STREAM, 0); //cria o socket
	if(sockfd < 0) {
		fprintf(stderr, "ERROR: %s\n", strerror(errno));
		exit(1);
	} //se der erro aborta 
   
	memset((char*) &serv_addr, 0, sizeof(serv_addr)); //zera o serv_addr
  
	serv_addr.sin_family = AF_INET; //definindo os valores do server
	serv_addr.sin_addr.s_addr = INADDR_ANY; 
	serv_addr.sin_port = htons(atoi(argv[PORT]));//porta do servidor 

	if(bind(sockfd, (struct sockaddr*) &serv_addr, sizeof(serv_addr)) < 0) { //associa socket a porta que será usada
		fprintf(stderr, "ERROR: %s\n", strerror(errno));
		exit(1);
	}
  
	if(listen(sockfd, LISTEN_ENQ) < 0) { //escuta requisições ao socket (muito provavelmente requisições a porta)
		fprintf(stderr, "ERROR: %s\n", strerror(errno));
		exit(1);
	}

	clilen = sizeof(cli_addr);

	// talvez aqui vire uma funçao do servidor via fork
	while(1) { //loop d conexão	
		newsockfd = accept(sockfd, (struct sockaddr*) &cli_addr, (unsigned int*) &clilen);//tenta nova conexão
		if(newsockfd < 0) { //verifica erro
			fprintf(stderr, "ERROR: %s\n", strerror(errno));
			exit(1);
		}

		pid = fork(); //cria um novo processo
		if(pid < 0) { //erro no fork?
			fprintf(stderr, "ERROR: %s\n", strerror(errno));
			exit(1);
		}
		
		if(pid == 0) { 
			// estamos no filho
			close(sockfd);
			
			memset(buffer, 0, sizeof(buffer));
  
			if(n = recv(newsockfd, buffer, sizeof(buffer), 0) < 0) {
				fprintf(stderr, "ERROR: %s\n", strerror(errno));
				exit(1);
			}
			// buffer[n] =
  			


			printf("Mensagem recebida: %s\n", buffer);



			// colocar caminho dinamico de acordo com request depois ########################
			sendFile("files/index.html", newsockfd); 

			close(newsockfd);

			return 0;
		} else {
			//Parent ou Child?
			close(newsockfd);
		}
	}

	close(sockfd);

	return 0; 
}

void parseRequest(char* requestLine){

    for (i = 0; i < strlen(requestLine); i++){

    	printf("%c\n", requestLine[i]);
    }

}

void sendFile(char *filePath, int sockfd){
	FILE *fileToBeSent;
	long size;
	char *sender;

	fileToBeSent = fopen(filePath, "rb");

	if(fileToBeSent){
		fseek(fileToBeSent, 0, SEEK_END); // coloca indicador no fim do arquivo
		size = ftell(fileToBeSent); // pega o tamanho usando o indicador
		rewind(fileToBeSent); // volta indicador ao início
		sender = (char *) malloc(sizeof(char) * size); // alloca espaço para mandar todo o arquivo
		fread(sender, 1, size, fileToBeSent); // armazena em sender o arquivo
		// printf("Dados do sender: %s", sender);
		send(sockfd, sender, size, 0); // manda ao socket os dados que armazenamos em sender
		fclose(fileToBeSent);
		free(sender);
	}
}