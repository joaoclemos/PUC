import numpy as np
import matplotlib.pyplot as plt
def f(x):
    return x**2
x0 = 2
y0 = f(x0)
x_vals = np.array([2.5, 2.4, 2.3, 2.2, 2.1, 2.01])
f_vals = f(x_vals)
ms = (f_vals - y0) / (x_vals - x0)
print("x\tf(x)\t\tm_secante")
for xi, fi, mi in zip(x_vals, f_vals, ms):
    print(f"{xi:.2f}\t{fi:.4f}\t\t{mi:.4f}")
def tangente(x): return 4 * (x - x0) + y0
x_graf = np.linspace(1, 2.6, 300)
plt.figure(figsize=(8,6))
plt.plot(x_graf, f(x_graf), label='f(x) = x²', color='blue')
cores = ['red', 'orange', 'green', 'purple', 'gray', 'brown']
for xi, mi, cor in zip(x_vals, ms, cores):
    y_sec = mi * (x_graf - x0) + y0
    plt.plot(x_graf, y_sec, linestyle='--', color=cor, alpha=0.6)
plt.plot(x_graf, tangente(x_graf), label='Tangente em x=2', color='black')
plt.plot(x0, y0, 'ko')
plt.text(x0 + 0.05, y0, 'A = (2, 4)')
plt.title("Gráfico com Retas Secantes e Tangente")
plt.xlabel("x")
plt.ylabel("y")
plt.grid(True)
plt.legend()
plt.show()
