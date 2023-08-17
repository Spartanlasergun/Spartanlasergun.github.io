import matplotlib.pyplot as plt


x = list(range(-100, 100, 1))
y = []

for item in x:
	fx = pow(item, 2)
	y.append(fx)

a = x
b = []

for item in a:
	func = (20 * item) - 100
	b.append(func)


plt.plot(x, y)
plt.plot(a, b)
plt.grid(True)
plt.show()
