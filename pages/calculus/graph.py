import matplotlib.pyplot as plt


x = list(range(-100, 100, 1))
y = []

for item in x:
	fx = pow(item, 2)
	y.append(fx)

a = x
b = []

for item in a:
	func = (100 * item) - 2500
	b.append(func)


plt.plot(x, y)
plt.plot(a, b)
plt.title('Tangent to the curve y=x² at (50, 2500)')
plt.grid(True)
plt.savefig('tangent.png', dpi=75, transparent=True)
