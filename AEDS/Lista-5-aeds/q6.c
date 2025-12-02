#include <stdio.h>

int main() {
    FILE *f;
    int num, divisor = 2;

    f = fopen("saida.txt", "w");

    do {
        scanf("%d", &num);
        if (num != 0) {
            printf("%d\n", num % divisor);
            fprintf(f, "%d\n", num % divisor);
        }
    } while (num != 0);

    fclose(f);

    return 0;
}