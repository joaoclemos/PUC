using System;

class Program {
    static void Main() {
        int N = int.Parse(Console.ReadLine());
        int small = 0, medium = 0;
        string[] sizes = Console.ReadLine().Split();
        for (int i = 0; i < N; i++) {
            int Ti = int.Parse(sizes[i]);
            if (Ti == 1) small++;
            else medium++;
        }
        int P = int.Parse(Console.ReadLine());
        int M = int.Parse(Console.ReadLine());
        if (small <= P && medium <= M) {
            Console.WriteLine("S");
        } else {
            Console.WriteLine("N");
        }
    }
}