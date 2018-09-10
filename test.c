#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>

char* getContentLen(char* filePath){
	FILE *file;
	long size;

	if(filePath[0] == '/'){
		file = fopen(filePath+1, "rb");
	}else{
		file = fopen(filePath, "rb");

	}

	fseek(file, 0, SEEK_END); // coloca indicador no fim do arquivo
	size = ftell(file); // pega o tamanho usando o indicador
	char* str = malloc(sizeof(char)*10);
	sprintf(str, "%d", (int) size);
	return str;

}


int main (void){
	printf("%s\n", getContentLen("/docs/index.html"));
}