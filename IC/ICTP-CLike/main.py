N = int(input())
sizes = list(map(int, input().split()))
small = sizes.count(1)
medium = sizes.count(2)
P = int(input())
M = int(input())
if small <= P and medium <= M:
    print("S")
else:
    print("N")