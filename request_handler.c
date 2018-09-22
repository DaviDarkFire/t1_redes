#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#define SECONDSPACEPOS 11 //11: navegador, 10: terminal
#define THISSHOULDBEHTTPINDEX 10
#define KEEPALIVECONN 1
#define CLOSECONN 2

int checkRequestLine(char * requestLine){
	if(strncmp("GET", requestLine, 3) == 0){
		// printf("1\n");

		if (requestLine[3] == ' '){
			// printf("2\n");
			// printf("Pos: %c////////\n", requestLine[strlen(requestLine)-SECONDSPACEPOS]);
			if(requestLine[strlen(requestLine)-SECONDSPACEPOS] == ' '){ //pode variar o valor do -10

				// printf("3\n");

				int i;
				char thisShouldBeHTTP[THISSHOULDBEHTTPINDEX];
				for(i = 1; i <= THISSHOULDBEHTTPINDEX; i++){
					int j = strlen(requestLine) - SECONDSPACEPOS + i;
					thisShouldBeHTTP[i-1] = requestLine[j];
				}
				thisShouldBeHTTP[THISSHOULDBEHTTPINDEX] = '\0';

				if(strcmp("HTTP/1.1\r\n", thisShouldBeHTTP) == 0){
					// printf("4\n");


					int nofspaces = 0;

					for(i = 0; i < strlen(requestLine); i++)
					{
						if(requestLine[i] == ' ') nofspaces++;
					}


					if(nofspaces == 2){
						// printf("5\n");

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

int checkConnection(char* header){
	char* start;
	start = strstr(header, "Connection: ");
	if(start == NULL) return -1;
	start = start + 12;
	if (strncmp(start, "keep-alive", 10) == 0) return KEEPALIVECONN;
	else return CLOSECONN;
}
