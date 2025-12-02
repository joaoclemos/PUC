#include <stdio.h>

int main() {
    char letra = 'A';
    char *ptr = &letra;
    
    while (*ptr <= 'Z') {
        printf("%c ", *ptr);
        (*ptr)++;
    }
    
    return 0;
}