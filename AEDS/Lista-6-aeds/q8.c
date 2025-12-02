#include <stdio.h>

void preencheMatriz(int M[10][10]) {
    int i, j;
    for(i = 0; i < 10; i++)
        for(j = 0; j < 10; j++)
            scanf("%d", &M[i][j]);
}

void exibeMatriz(int M[10][10]) {
    int i, j;
    for(i = 0; i < 10; i++) {
        for(j = 0; j < 10; j++)
            printf("%d ", M[i][j]);
    }
}

void trocaLinha2com8(int M[10][10]) {
    int i, temp;
    for(i = 0; i < 10; i++) {
        temp = M[1][i];
        M[1][i] = M[7][i];
        M[7][i] = temp;
    }
}

void trocaColuna4com10(int M[10][10]) {
    int i, temp;
    for(i = 0; i < 10; i++) {
        temp = M[i][3];
        M[i][3] = M[i][9];
        M[i][9] = temp;
    }
}

void trocaDiagonais(int M[10][10]) {
    int i, temp;
    for(i = 0; i < 10; i++) {
        temp = M[i][i];
        M[i][i] = M[i][9-i];
        M[i][9-i] = temp;
    }
}

void trocaLinha5comColuna10(int M[10][10]) {
    int i, temp;
    for(i = 0; i < 10; i++) {
        temp = M[4][i];
        M[4][i] = M[i][9];
        M[i][9] = temp;
    }
}

int main() {
    int M[10][10];
    preencheMatriz(M);
    exibeMatriz(M);
    trocaLinha2com8(M);
    exibeMatriz(M);
    preencheMatriz(M);
    trocaColuna4com10(M);
    exibeMatriz(M);
    preencheMatriz(M);
    trocaDiagonais(M);
    exibeMatriz(M);
    preencheMatriz(M);
    trocaLinha5comColuna10(M);
    exibeMatriz(M);
    return 0;
}
