#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#define CGIBINLEN 8

void loadQueryString(char* path);
int getCharIndex(char* string, char desiredChar);
char* getScriptName(char* path);
int isCGIBIN(char * path);


int isCGIBIN(char * path){
  if(strncmp(path, "cgi-bin/", 8) == 0) return 1;
  return 0;
}

char* getScriptName(char* path){
  char * script;
  int endOfScriptNameIndex, len;
  endOfScriptNameIndex = getCharIndex(path, '?') - 1;
  len = endOfScriptNameIndex - CGIBINLEN + 1;
  script = (char*) malloc(sizeof(char) * len);
  strncpy(script, path+CGIBINLEN, len);
  script[len] = 0;
  return script;
}

int getCharIndex(char* string, char desiredChar){
  int i;
  for(i = 0; string[i] != '\0'; i++){
    if(string[i] == desiredChar) return i;
  }
  return -1;
}

void loadQueryString(char* path){
    char* params = strchr(path, '?') + 1;
    setenv("QUERY_STRING", params, 1);
}

void getQueryString(){
    printf("QUERY_STRING: %s\n", getenv("QUERY_STRING"));

}

// ta errado, ler links do telegram
// void loadQueryString(char* path){
//   int startOfParams;
//   startOfParams = getCharIndex(path, '?')+1;
//   strcpy(getenv("QUERY_STRING"), path+startOfParams);
//   printf("Query string na loadQueryString:%s\n", getenv("QUERY_STRING"));
// }

// int main(int argc, char* argv[], char* arge[]){
//   char pathTest[] = "/cgi-bin/soma?a=10&b=20";
//
//   if(isCGIBIN(pathTest)) printf("é cgi-bin\n");
//   else printf("não é cgi-bin\n");
//
//   printf("posição do ?:%d\n", getCharIndex(pathTest, '?'));
//   char* script;
//   script = getScriptName(pathTest);
//   printf("o nome do script é:%s\n", script);
//   loadQueryString(pathTest);
//   printf("O query string é:%s\n", getenv("QUERY_STRING"));
// }
