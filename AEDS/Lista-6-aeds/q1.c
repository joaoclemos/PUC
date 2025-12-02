#include <stdio.h>
#include <stdlib.h>

void notas(float alunos[10]){
    for(int i=0; i<10; i++){
        scanf("%f", &alunos[i]);
    }
}
void calculo(float alunos[10]){
    float media = 0;
    int acimamedia=0;
    for (int i=0; i<10; i++){
            media += alunos[i];
            if (alunos[i] >=6){
                acimamedia++;
            }
    }
    media = media / 10.0;
    printf("Media: %.2f\n", media);
    printf("Alunos acima da media: %d\n", acimamedia);
}

int main() {
    float nota[10];

    notas(nota);
    calculo(nota);

    return 0;
}
