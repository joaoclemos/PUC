#include <stdio.h>

int main() {
    FILE *arquivo;
    char texto[100];

    arquivo = fopen("texto.txt", "w");

    fgets(texto, 100, stdin);

    fprintf(arquivo, "%s", texto);

    fclose(arquivo);

    return 0;
}