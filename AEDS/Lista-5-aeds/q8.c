#include <stdio.h>

int main() {
    FILE *f;
    float valor, soma = 0, media;
    int n, i = 0;

    scanf("%d", &n);
    f = fopen("resultados.txt", "w");

    while (i < n) {
        scanf("%f", &valor);
        soma += valor;
        fprintf(f, "%.2f\n", valor);
        i++;
    }

    media = soma / n;
    fprintf(f, "%.2f\n", media);
    fclose(f);

    return 0;
}