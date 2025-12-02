#include <stdio.h>

int main() {
    FILE *f;
    int n, count = 0;
    char letra;

    scanf("%d", &n);
    f = fopen("letras.txt", "w");

    for (int i = 0; i < n; i++) {
        scanf(" %c", &letra);
        fprintf(f, "%c\n", letra);
    }

    fclose(f);
    f = fopen("letras.txt", "r");

    for (int i = 0; i < n; i++) {
        fscanf(f, " %c", &letra);
        if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u' ||
            letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U') {
            count++;
        }
    }

    fclose(f);
    printf("%d\n", count);

    return 0;
}