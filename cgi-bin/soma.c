#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void getParameters(int* a, int* b, char* parameters){
	char* beginPos, endPos;
	int len;

	char* beginPos = strchr(parameters, 'a') + 2;
	char* endPos = strchr(parameters, 'b') - 1;
	len = strlen(endPos) - strlen(beginPos) + 1;
	printf("LEN: %d\n", len);
	char number[len];
	// strncpy(number, beginPos, len);
	// a = atoi(number);

	// beginPos = strchr(parameters, 'b');
	// endPos = strlen(parameters)-1;
	// len = atoi(endPos) - atoi(beginPos) +1;
	// strncpy(number, *beginPos, len);
	// b = atoi(number);
}

int main(int argc, char* argv[], char* arge[]){
	// for (int i = 0; i <= 20; i++){
	// 	if(strncmp(arge[i], "QUERY_STRING=", 13) == 0
	// 		break;
	// }

	int a, b;
	// char* parameters = arge[i];
	char parameters[] = "a=10b=20";
	getParameters(&a, &b, parameters);
	printf("resultado: %d", a+b);
}