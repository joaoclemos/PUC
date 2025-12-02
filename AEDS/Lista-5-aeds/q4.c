#include <stdio.h>

int main() {
    FILE *arquivo;
    char linha[256];
    int num_linhas = 0;
    char nome_arquivo[100];

    printf("Digite o nome do arquivo de texto: ");
    scanf("%s", nome_arquivo);

    arquivo = fopen(nome_arquivo, "r");

    printf("\nConteudo do arquivo:\n");
    while (fgets(linha, sizeof(linha), arquivo) != NULL) {
        printf("%s", linha);
        num_linhas++;
    }

    fclose(arquivo);

    printf("\n%d LINHAS\n", num_linhas);

    return 0;
}