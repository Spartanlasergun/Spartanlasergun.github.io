import matplotlib.pyplot as plt


start = 0
end = 4
step = 0.01

# Using a list comprehension to create the list of numbers
x = [start + i * step for i in range(int((end - start) / step) + 1)]
y = []

for item in x:
	func = pow(2, item)
	y.append(func)

for item in y:
	if item <= 10:
		index = y.index(item)

b = x[index]

x_1 = [0, b, b]
y_1 = [10, 10, 0]

plt.title('y = 2ˣ')
plt.grid(True)

plt.plot(x_1, y_1, linestyle='--')

plt.plot(x, y)

# Annotate the point with text
point = "(3.32, 10)"
plt.annotate(point, xy=(3, 10), xytext=(3, 11), color='blue')


plt.savefig('y = 2ˣ.png', transparent=True, dpi=75)  # Adjust the file name and DPI as needed