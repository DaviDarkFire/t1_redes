#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>
#include <dirent.h>


int main (void){
	char ext[] = "docs/";

	if(ext[strlen(ext)-1] != '/'){
		printf("Nao tinha barra mas eu coloquei\n");
		strcat(ext, "/");
	}
	else{
		printf("tinha barra\n");
	}
	if(opendir(ext) != NULL){

		printf("DEU BOA\n");
	}else{
		printf("DEU RUIM\n");
	}	
	

	
}