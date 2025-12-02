import numpy as np
import matplotlib.pyplot as plt
def f(x):
    return x**3
x0 = 1
y0 = f(x0)
x_vals = np.array([1.5, 1.4, 1.3, 1.2, 1.1, 1.01])
f_vals = f(x_vals)
ms = (f_vals - y0) / (x_vals - x0)
print("x\tf(x)\t\tm_secante")
for xi, fi, mi in zip(x_vals, f_vals, ms):
    print(f"{xi:.2f}\t{fi:.4f}\t\t{mi:.4f}")
def tangente(x): return 3 * (x - x0) + y0
x_graf = np.linspace(0.5, 1.6, 300)
plt.figure(figsize=(8,6))
plt.plot(x_graf, f(x_graf), label='f(x) = x³', color='blue')
cores = ['red', 'orange', 'green', 'purple', 'gray', 'brown']
for xi, mi, cor in zip(x_vals, ms, cores):
    y_sec = mi * (x_graf - x0) + y0
    plt.plot(x_graf, y_sec, linestyle='--', color=cor, alpha=0.6)
plt.plot(x_graf, tangente(x_graf), label='Tangente em x=1', color='black')
plt.plot(x0, y0, 'ko')
plt.text(x0 + 0.02, y0, 'A = (1, 1)')
plt.title("f(x) = x³ e Retas Secantes e Tangente em x = 1")
plt.xlabel("x")
plt.ylabel("y")
plt.grid(True)
plt.legend()
plt.show()
