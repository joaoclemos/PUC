#include <stdio.h>
#include <stdlib.h>
void preencher(int vet1[10], int vet2[10])
{
    for(int i=0; i<10; i++)
    {
        scanf("%d", &vet1[i]);
    }
    for(int j=0; j<10; j++)
    {
        scanf("%d", &vet2[j]);
    }
}
void alternar(int vet1[10], int vet2[10], int vfinal[20])
{
    int k =0;
    for(int j=0; j<10; j++)
    {
        vfinal[k]= vet1[j];
        k++;
        vfinal[k]= vet2[j];
        k++;
    }
}
void exibirVetor(int vetor[20])
{
    for (int i = 0; i < 20; i++)
    {
        printf("%d ", vetor[i]);
    }
    printf("\n");
}

int main()
{
    int vet1[10], vet2[10], vfinal[20];
    preencher(vet1, vet2);
    alternar(vet1, vet2, vfinal);
    exibirVetor(vfinal);
    return 0;
}
