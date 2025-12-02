#include <stdio.h>

int main() {
    int N, P, M, Ti;
    int small = 0, medium = 0;
    scanf("%d", &N);
    for (int i = 0; i < N; i++) {
        scanf("%d", &Ti);
        if (Ti == 1) small++;
        else medium++;
    }
    scanf("%d", &P);
    scanf("%d", &M);
    if (small <= P && medium <= M) {
        printf("S\n");
    } else {
        printf("N\n");
    }
    return 0;
}