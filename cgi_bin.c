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
