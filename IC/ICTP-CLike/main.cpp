#include <iostream>
using namespace std;

int main() {
    int N, P, M, Ti;
    int small = 0, medium = 0;
    cin >> N;
    for (int i = 0; i < N; i++) {
        cin >> Ti;
        if (Ti == 1) small++;
        else medium++;
    }
    cin >> P >> M;
    if (small <= P && medium <= M) {
        cout << "S" << endl;
    } else {
        cout << "N" << endl;
    }
    return 0;
}