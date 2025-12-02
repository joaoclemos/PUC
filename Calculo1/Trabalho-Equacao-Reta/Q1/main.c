#include <stdio.h>
#include <stdlib.h>
#include <math.h>

void EquacaoReta(float x1, float y1, float x2, float y2) {
    float m = (y2 - y1) / (x2 - x1);
    float b = y1 - m * x1;
    printf("Coeficiente angular m: %.2f\n", m);
    printf("Equacao da reta: y = %.2fx + %.2f\n", m, b);
}

int main() {
    float x1, y1;
    float x2, y2;
    printf("Insira os valores de x1, y1, x2, y2: ");
    scanf("%f%f%f%f", &x1, &y1, &x2, &y2);
    EquacaoReta(x1, y1, x2, y2);

    return 0;
}
