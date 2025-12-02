#include <stdio.h>

int main() {
    float x1, y1, x2, y2;
    float m, b;

    printf("Digite as coordenadas do primeiro ponto (x1 y1): ");
    scanf("%f %f", &x1, &y1);

    printf("Digite as coordenadas do segundo ponto (x2 y2): ");
    scanf("%f %f", &x2, &y2);
    m = (y2 - y1) / (x2 - x1);
    b = y1 - m * x1;

    printf("A equação da reta é: y = %.2fx + %.2f\n", m, b);

    return 0;
}
