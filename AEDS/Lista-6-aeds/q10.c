#include <stdio.h>
#include <ctype.h>
#include <string.h>

void contar_vogais_consoantes(char *str, int *vogais, int *consoantes) {
    *vogais = 0;
    *consoantes = 0;

    while(*str != '\0') {
        char c = tolower(*str);

        if(c >= 'a' && c <= 'z') {
            if(c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
                (*vogais)++;
            } else {
                (*consoantes)++;
            }
        }
        str++;
    }
}

int main() {
    char texto[100];
    int vogais, consoantes;
    fgets(texto, sizeof(texto), stdin);

    texto[strcspn(texto, "\n")] = '\0';

    contar_vogais_consoantes(texto, &vogais, &consoantes);

    printf("Vogais: %d\n", vogais);
    printf("Consoantes: %d\n", consoantes);

    return 0;
}
