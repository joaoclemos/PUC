#include <stdio.h>
#include <string.h>

void trocar(char *a, char *b)
{
    char temp = *a;
    *a = *b;
    *b = temp;
}

void permutar(char *str, int inicio, int fim)
{
    if (inicio == fim)
    {
        printf("%s ", str);
    }
    else
    {
        for (int i = inicio; i <= fim; i++)
        {
            trocar((str + inicio), (str + i));
            permutar(str, inicio + 1, fim);
            trocar((str + inicio), (str + i));
        }
    }
}

int main()
{
    char str[100];
    scanf("%s", str);
    int n = strlen(str);
    printf("As permutações da string são:\n");
    permutar(str, 0, n - 1);
    return 0;
}
