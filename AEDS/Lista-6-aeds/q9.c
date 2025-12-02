#include <stdio.h>
#include <stdlib.h>

void ordenarVetor(int *vetor, int tamanho) {
    int i, j, temp;

    for (i = 0; i < tamanho - 1; i++) {
        for (j = i + 1; j < tamanho; j++) {
            if (*(vetor + i) > *(vetor + j)) {
                temp = *(vetor + i);
                *(vetor + i) = *(vetor + j);
                *(vetor + j) = temp;
            }
        }
    }
}
void imprimirVetor(int *vetor, int tamanho) {
    for (int i = 0; i < tamanho; i++) {
        printf("%d", *(vetor + i));
        if (i < tamanho - 1) {
            printf(" ");
        }
    }
    printf("\n");
}
int main() {
    int tamanho;
    int *vetor;
    scanf("%d", &tamanho);
    vetor = (int *)malloc(tamanho * sizeof(int));
    if (vetor == NULL) {
        return 1;
    }
    for (int i = 0; i < tamanho; i++) {
        scanf("%d", vetor + i);
    }
    ordenarVetor(vetor, tamanho);
    imprimirVetor(vetor, tamanho);
    free(vetor);
    return 0;
}
