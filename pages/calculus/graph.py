import matplotlib.pyplot as plt

x = list(range(-10, 10, 1))
y = list(range(-10, 10, 1))

origin = [0, 0, 0, 0, 0]
axis = [-15, -5, 0, 5, 15]

plt.plot(x, y)
plt.plot(origin, axis, color='black')
plt.plot(axis, origin, color='black')
plt.scatter(x, y)
plt.plot()
plt.grid(True)
plt.xlabel('Time(seconds)')
plt.ylabel('Distance(meters)')
plt.title('Graph of Distance(m) vs Time(s)')
plt.savefig('uniform_motion.png', transparent=True, dpi=75)
