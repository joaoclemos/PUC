import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int N = scanner.nextInt();
        int small = 0, medium = 0;
        for (int i = 0; i < N; i++) {
            int Ti = scanner.nextInt();
            if (Ti == 1) small++;
            else medium++;
        }
        int P = scanner.nextInt();
        int M = scanner.nextInt();
        if (small <= P && medium <= M) {
            System.out.println("S");
        } else {
            System.out.println("N");
        }
        scanner.close();
    }
}