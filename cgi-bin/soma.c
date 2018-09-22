#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>

#define CONNFDINDEX 1

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
	char* params = getenv("QUERY_STRING");

	int a, b;

	getParameters(&a, &b, params);

	printf("HTTP/1.1 200 OK\r\n");
	printf("Server: FACOMRC-2018/1.0\r\n");
	printf("Content-Length: %d\r\n", 148+2);
	printf("Content-type: text/html\r\n\r\n");
	printf("<!DOCTYPE html>\r\n");
	printf("<html>\r\n");
	printf("<head>\r\n<meta charset=\"UTF-8\">\r\n<title>Resultado da soma</title>\r\n</head>\r\n");
	printf("<body>\r\n");
	printf("a+b = %d\r\n", a+b);
	printf("</body></html>");

	return 1;
}
