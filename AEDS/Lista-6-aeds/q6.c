#include <stdio.h>
#include <stdlib.h>
void preencherMatriz(int M[4][4])
{
    for (int i = 0; i < 4; i++)
    {
        for (int j = 0; j < 4; j++)
        {
            if (scanf("%d", &M[i][j]) != 1)
            {
                M[i][j] = 0;
            }
        }
    }
}
void MostrarDiagonalPrincipal(int M[4][4])
{
    for(int i=0; i<4; i++)
    {
        printf("%d ", M[i][i]);
    }
}

void SomaAbaixoDiagonalPrincipal(int M[4][4])
{
    int soma = 0;
    for(int i=0; i<4; i++)
    {
        for(int j=0; j<4; j++)
        {
            if(i>j)
            {
                soma += M[i][j];
            }
        }
    }
    printf("%d\n", soma);
}
int main()
{
    int M[4][4];
    preencherMatriz(M);
    SomaAbaixoDiagonalPrincipal(M);
    MostrarDiagonalPrincipal(M);
    return 0;
}
