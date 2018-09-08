#include <stdio.h>
#include <string.h>

int checkRequestLine(char * requestLine){
	if(strncmp("GET", requestLine, 3) == 0){
		printf("passou 1o if ta ok\n");
		if (requestLine[3] == ' '){
			printf("passou 2o if ta ok\n");
			if(requestLine[strlen(requestLine)-9] == ' '){
				printf("passou 3o if ta ok\n");
				int i;
				char thisShouldBeHTTP[8];
				for(i = 1; i <= 8; i++){
					int j = strlen(requestLine) - 9 + i;
					thisShouldBeHTTP[i-1] = requestLine[j];
				}
				thisShouldBeHTTP[8] = '\0';

				if(strcmp("HTTP/1.1", thisShouldBeHTTP) == 0){
					printf("passou 4o if ta ok\n");

					int nofspaces = 0;

					for(i = 0; i < strlen(requestLine); i++)
					{
						if(requestLine[i] == ' ') nofspaces++;
					}

					printf("%d\n", nofspaces);
					if(nofspaces == 2){
						printf("passou 5o if ta ok\n");
						return 1;
					}
				}

			}		
			
		}
	}
	return 0;
}

void parseRequest(char* requestLine){

	char *startOfCore = strchr(requestLine, ' ') + 1;
    char *endOfCore = strchr(startOfCore, ' ') - 1;
    
    char core[endOfCore - startOfCore+1];

    strncpy(core, startOfCore,  endOfCore - startOfCore+1);

    core[sizeof(core)] = 0;

    printf("%s\n", core, sizeof(core));

}

int main(int argc, char** argv){
	int r;
	if(checkRequestLine("GET meu/pau/de/ó cul os/i ndex.html HTTP/1.1"))
		printf("TA CERTO TA OK\n");
	else
		printf("essa REQUEST TA UMA PORRA TA OK\n");
	
	return 0;

}