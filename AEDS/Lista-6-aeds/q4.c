#include <stdio.h>
#include <stdlib.h>

int main()
{
    int tamanho;
    int *vetor;
    int maior;

    scanf("%d", &tamanho);
    vetor = (int *)malloc(tamanho * sizeof(int));
    if (vetor == NULL)
    {
        return 1;
    }
    for (int i = 0; i < tamanho; i++)
    {
        scanf("%d", &vetor[i]);
    }
    maior = vetor[0];
    for (int i = 1; i < tamanho; i++)
    {
        if (vetor[i] > maior)
        {
            maior = vetor[i];
        }
    }
    printf("%d\n", maior);
    free(vetor);
    return 0;
}
