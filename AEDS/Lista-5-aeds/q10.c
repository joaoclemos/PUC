#include <stdio.h>

int main() {
    FILE *f;
    int n;
    float num, max, min, sum = 0, avg;

    f = fopen("entrada.txt", "r");
    fscanf(f, "%d", &n);

    for (int i = 0; i < n; i++) {
        fscanf(f, "%f", &num);
        sum += num;
        if (i == 0) {
            max = num;
            min = num;
        }
        if (num > max) max = num;
        if (num < min) min = num;
    }

    fclose(f);
    avg = sum / n;

    printf("%.2f\n%.2f\n%.2f\n", max, min, avg);

    return 0;
}