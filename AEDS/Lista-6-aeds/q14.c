#include <stdio.h>
#include <stdlib.h>

int main() {
    int n;
    scanf("%d", &n);
    
    char *v = (char*)malloc(n * sizeof(char));
    scanf("%s", v);
    
    char *p = v + n - 1;
    while (p >= v) {
        printf("%c", *p);
        p--;
    }
    
    free(v);
    return 0;
}