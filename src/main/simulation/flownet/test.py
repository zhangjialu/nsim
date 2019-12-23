import numpy as np
from scipy import linalg

a = np.array([[2, 1], [1, 1]])
b = np.array([[3], [2]])

x = linalg.solve(a, b)

print(x)
