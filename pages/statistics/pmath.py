import matplotlib.pyplot as plt
import numpy as np

bins = [150, 153, 155, 156, 158, 160]
mid_points = [151.5, 154, 155.5, 157, 159]
freq = [5, 8, 15, 3, 6]
raw_data = []
index = 0
for item in freq:
	count = item
	while count != 0:
		raw_data.append(mid_points[index])
		count = count - 1
	index = index + 1

freq_den = []
index = 0
widths = [3, 2, 1, 2, 2]
for item in freq:
	density = item / widths[index]
	freq_den.append(density)
	index = index + 1
print(freq_den)

#plt.title('Histogram')
#plt.hist(raw_data, bins=bins, density=True, edgecolor='black')
#plt.show()

#plt.savefig('histogram.png', transparent=True, dpi=90)