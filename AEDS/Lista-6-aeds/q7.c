#include <stdio.h>
#include <stdlib.h>
void preencherMatriz(int linhas, int colunas, int matriz[linhas][colunas])
{
    for (int i = 0; i < linhas; i++)
    {
        for (int j = 0; j < colunas; j++)
        {
            scanf("%d", &matriz[i][j]);
        }
    }
}
void imprimirMatriz(int linhas, int colunas, int M[linhas][colunas])
{
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < 5; j++)
        {
            printf("%d ", M[i][j]);
        }
        printf("\n");
    }
}

int main()
{
    int A[4][6];
    int B[4][6];
    int S[4][6];
    int D[4][6];
    preencherMatriz(4, 6, A);
    preencherMatriz(4, 6, B);
    for(int i=0; i<4; i++)
    {
        for(int j=0; j<6; j++)
        {
            S[i][j] = A[i][j]+B[i][j];
            D[i][j] = A[i][j]-B[i][j];
            printf("%d ", S[i][j]);
        }
    }
    for(int i=0; i<4; i++)
    {
        for(int j=0; j<6; j++)
        {
            printf("%d ", D[i][j]);
        }
    }
    return 0;
}
