#include <stdio.h>

int main()
{
    FILE *arquivo;
    char caractere;
    int contador = 0;

    arquivo = fopen("texto.txt", "r");

    while ((caractere = fgetc(arquivo)) != EOF)
    {
        if (caractere == 'a' || caractere == 'A')
        {
            contador++;
        }
    }

    printf("%d CARACTERES\n", contador);

    fclose(arquivo);

    return 0;
}
