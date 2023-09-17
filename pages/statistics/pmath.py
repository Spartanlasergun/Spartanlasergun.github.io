import matplotlib.pyplot as plt
from scipy.interpolate import interp1d
import numpy as np

a = [150.5, 151.5, 152.5, 153.5, 154.5]
b = [5, 13, 28, 31, 37]

x = np.linspace(150.5, 154.5, 100)
func = interp1d(a, b, kind='quadratic')
y = func(x)

x_list = x.tolist()
y_list = y.tolist()

for item in y_list:
	if item <= (37/2):
		index = y_list.index(item)
median = x_list[index]
freq_mid = 37/2

medx = [150, median, median, median]
medy = [freq_mid, freq_mid, freq_mid, 0]

tex = "(" + str(round(median, 3)) + ", " + str(freq_mid) + ")" 

plt.grid(True)
plt.title("Cumulative Frequency Curve")
plt.scatter(a, b)
plt.plot(medx, medy, linestyle='--')
plt.plot(x, y)
# Annotate a specific point (e.g., the point at index 2)
plt.text(median, freq_mid, tex, fontsize=12, ha='center', va='bottom')
plt.savefig('cum_freq_curve.png', transparent=True, dpi=75)