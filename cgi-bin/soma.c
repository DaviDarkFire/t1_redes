#include <stdio.h>
#include <string.h>
#include <stdlib.h>
//a=0&b=2

int getNumber(char* params, char c1, char c2){
	char *start = strchr(params, c1) + 2;
    char *end = strchr(params, c2) - 1;
    int len = end-start+1;
    char nl[len];
    strncpy(nl, start, len);
    return atoi(nl);
}
void getParameters(int* a, int* b, char* parameters){
	*a = getNumber(parameters, 'a','&');
	*b = getNumber(parameters, 'b','\0');
}

int main(int argc, char* argv[], char* arge[]){
	// for (int i = 0; i <= 20; i++){
	// 	if(strncmp(arge[i], "QUERY_STRING=", 13) == 0
	// 		break;
	// }

	char* params = getenv("QUERY_STRING");

	int a, b;

	getParameters(&a, &b, params);
	printf("a, b: %d%d\n", a,b);
	// // char* parameters = arge[i];
	// char parameters[] = "a=10b=20";
	// getParameters(&a, &b, parameters);
}