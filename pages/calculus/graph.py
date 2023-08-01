import matplotlib.pyplot as plt


x = list(range(1, 100))
y = []
for item in x:
	func = 1 / item
	y.append(func)

fig =plt.figure(figsize=(5,4))
plt.plot(x, y)
plt.title("Graph of y = 1/x")
plt.grid(True)
fig.savefig('limits_example.png', transparent=True)
