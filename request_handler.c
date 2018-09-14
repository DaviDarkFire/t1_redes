#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#define SECONDSPACEPOS 10

int checkRequestLine(char * requestLine){
	if(strncmp("GET", requestLine, 3) == 0){
		printf("1\n");

		if (requestLine[3] == ' '){
			printf("2\n");
			printf("Pos: %c////////\n", requestLine[strlen(requestLine)-SECONDSPACEPOS]);
			if(requestLine[strlen(requestLine)-SECONDSPACEPOS] == ' '){ //pode variar o valor do -10

				printf("3\n");

				int i;
				char thisShouldBeHTTP[8];
				for(i = 1; i <= 8; i++){
					int j = strlen(requestLine) - SECONDSPACEPOS + i;
					thisShouldBeHTTP[i-1] = requestLine[j];
				}
				thisShouldBeHTTP[8] = '\0';

				if(strcmp("HTTP/1.1", thisShouldBeHTTP) == 0){
					printf("4\n");


					int nofspaces = 0;

					for(i = 0; i < strlen(requestLine); i++)
					{
						if(requestLine[i] == ' ') nofspaces++;
					}


					if(nofspaces == 2){
						printf("5\n");

						return 1;
					}
				}

			}

		}
	}
	return 0;
}

char* getCore(char* requestLine){

	char *startOfCore = strchr(requestLine, ' ') + 1;
    char *endOfCore = strchr(startOfCore, ' ') - 1;

    char* core = malloc(sizeof(char) * (endOfCore - startOfCore+1));

    strncpy(core, startOfCore,  endOfCore - startOfCore+1);
    int coreLen = endOfCore - startOfCore+1;
    core[coreLen] = '\0';

    return core;

}

char* getRequestLine(char* buffer){
	char *startOfRequestLine = buffer;
	char *endOfRequestLine = strchr(buffer,'\n');
	char* requestLine = malloc(sizeof(char) * (endOfRequestLine - startOfRequestLine+1));
	// char requestLine[endOfRequestLine - startOfRequestLine+1];

	strncpy(requestLine, buffer,  endOfRequestLine - startOfRequestLine+1);

    int reqLen = endOfRequestLine - startOfRequestLine+1;
    requestLine[reqLen] = '\0';
    return requestLine;
}

// int main(int argc, char** argv){
// 	int r;

// 	// char* requestLine = getRequestLine("HTTP/1.1 <sp> 200 <sp> Document <sp> follows <crlf>\nServer: <sp> <Server-Type> <crlf>\nContent-type: <sp> <Document-Type> <crlf>\n{Outras informa¸c~oes de cabe¸calho}*\n<crlf>\n<Dados do Documento>");
// 	char* requestLine = getRequestLine("HTTP/1.1 <sp> 200 <sp> Document <sp> follows <crlf>\nServer: <sp> <Server-Type> <crlf>\nContent-type: <sp> <Document-Type> <crlf>\n{Outras informa¸c~oes de cabe¸calho}*\n<crlf>\n<Dados do Documento>");
// 	printf("Request Line: %s\n", requestLine);


// 	return 0;

// }
