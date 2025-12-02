#include <stdio.h>

int main() {
    FILE *f;
    int n, matricula, telefone, opcao;
    char nome_arquivo[20];

    scanf("%d", &n);
    f = fopen("saida.txt", "w");

    for (int i = 0; i < n; i++) {
        scanf("%d %d", &matricula, &telefone);
        fprintf(f, "%d %d\n", matricula, telefone);
    }

    fclose(f);
    scanf("%d", &opcao);
    sprintf(nome_arquivo, "%s.txt", opcao == 1 ? "entrada" : "saida");
    f = fopen(nome_arquivo, "r");

    while (fscanf(f, "%d %d", &matricula, &telefone) != EOF) {
        printf("%d %d\n", matricula, telefone);
    }

    fclose(f);
    return 0;
}