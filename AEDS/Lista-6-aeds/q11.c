#include <stdio.h>
#include <stdlib.h>

int main()
{
    int n, soma = 0;
    int *v;

    scanf("%d", &n);

    v = (int *)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
    {
        scanf("%d", v + i);
    }

    int *p = v;
    for (int i = 0; i < n; i++)
    {
        soma += *p;
        p++;
    }

    printf("%d\n", soma);

    free(v);

    return 0;
}
