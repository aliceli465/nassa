import numpy as np
import matplotlib.pyplot as plt

# Time values (x-axis) around the transit
time = np.linspace(-0.03, 0.03, 500)

# Example of a transit curve, using a parabolic model for illustration
relative_flux = np.ones_like(time)
transit_mask = (time > -0.01) & (time < 0.01)

# Create a parabolic dip during the transit
# We can use the formula: flux = baseline_flux - depth * (t^2)
depth = 0.01  # Depth of the transit
relative_flux[transit_mask] -= depth * ((time[transit_mask] / 0.01) ** 2)  # Adjust the depth of the dip

# Plotting
plt.plot(time, relative_flux, color='blue')
plt.xlabel('Time from central transit (days)')
plt.ylabel('Relative Flux')
plt.xlim(-0.03, 0.03)
plt.ylim(0.990, 1.001)
plt.axhline(1.0, color='red', linestyle='--', label='Baseline Flux')
plt.title('Transit Light Curve')
plt.legend()
plt.grid()
plt.show()
