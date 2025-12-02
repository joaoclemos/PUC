#include <stdio.h>

int main() {
    FILE *f1, *f2, *f3;
    char c;

    f1 = fopen("primeiro.txt", "r");
    f2 = fopen("segundo.txt", "r");
    f3 = fopen("terceiro.txt", "w");

    while ((c = fgetc(f1)) != EOF) fputc(c, f3);
    while ((c = fgetc(f2)) != EOF) fputc(c, f3);

    fclose(f1);
    fclose(f2);
    fclose(f3);

    return 0;
}