import matplotlib.pyplot as plt

#x_coords = list(range(-100, 100))
x_coords = [x / 100 for x in range(-1000, 1001)]


y_coords = []
for x in x_coords:
	a = x - 1
	y = pow(a, 2) - 40
	y_coords.append(y)

# Create a figure and axes
fig, ax = plt.subplots()

# Move the spine at the center of the y-axis
ax.spines['left'].set_position('center')

# Set the x-axis spine position
ax.spines['bottom'].set_position('zero')

# Move x-axis from bottom to top
#ax.xaxis.set_ticks_position('top')

ax.plot(x_coords, y_coords)
plt.grid(True)
plt.title('Graph of y = (x - 1)² - 40')

# Set the desired width and height in pixels
width_px = 640
height_px = 480

# Calculate the size in inches based on the DPI
dpi = 100  # default DPI
width = width_px / dpi
height = height_px / dpi

# Save the image with specified size and dpi
plt.savefig('y = (x - 1)² - 40.png', dpi=100, bbox_inches='tight', pad_inches=0, transparent=True)
