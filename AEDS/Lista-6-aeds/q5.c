#include <stdio.h>
#include <stdlib.h>


void preencherMatriz(int M[5][5])
{
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < 5; j++)
        {
            if (scanf("%d", &M[i][j]) != 1)
            {
                M[i][j] = 0;
            }
        }
    }
}

void imprimirMatriz(int M[5][5])
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

int somaLinha4(int M[5][5])
{
    int soma = 0;
    for (int j = 0; j < 5; j++)
    {
        soma += M[4][j];
    }
    return soma;
}

int somaColuna2(int M[5][5])
{
    int soma = 0;
    for (int i = 0; i < 5; i++)
    {
        soma += M[i][2];
    }
    return soma;
}

int somaDiagonalPrincipal(int M[5][5])
{
    int soma = 0;
    for (int i = 0; i < 5; i++)
    {
        soma += M[i][i];
    }
    return soma;
}

long long somaDiagonalSecundaria(int M[5][5]) {
    long long soma = 0;
    for (int i = 0; i < 5; i++) {
        soma += M[i][4 - i];
    }
    return soma;
}

long long somaTodosElementos(int M[5][5])
{
    long long soma = 0;
    for (int i = 0; i < 5; i++)
    {
        for (int j = 0; j < 5; j++)
        {
            soma += M[i][j];
        }
    }
    return soma;
}

int main()
{
    int M[5][5];
    preencherMatriz(M);
    printf("%d\n", somaLinha4(M));
    printf("%d\n", somaColuna2(M));
    printf("%d\n", somaDiagonalPrincipal(M));
    printf("%lld\n", somaDiagonalSecundaria(M));
    printf("%lld\n", somaTodosElementos(M));
    return 0;
}
