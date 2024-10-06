import numpy as np
import matplotlib.pyplot as plt

def transit_light_curve(period, duration, depth, num_points=1000):
    # Generate time array
    t = np.linspace(0, period, num_points)
    # Create a model for the transit
    curve = np.ones(num_points)  # baseline flux
    # Calculate the mid-transit time
    mid_transit = period / 2
    
    # Calculate the transit light curve
    for i in range(num_points):
        if abs(t[i] - mid_transit) < duration / 2:
            # Calculate the depth during the transit
            curve[i] = 1 - depth
    
    return t, curve

# Parameters for the transit
period = 10  # days
duration = 1  # days
depth = 0.1  # 10% depth of the transit

# Generate the light curve
t, curve = transit_light_curve(period, duration, depth)

# Plot the light curve
plt.figure(figsize=(10, 5))
plt.plot(t, curve, color='blue', lw=2)
plt.title('Transit Light Curve')
plt.xlabel('Time from central transit (days)')
plt.ylabel('Relative Flux')
plt.ylim(0.9, 1.1)  # Adjust y-limits for better visibility
plt.grid(True)
plt.axvline(period/2, color='red', linestyle='--', label='Mid-Transit')
plt.legend()
plt.tight_layout()

# Save the figure
plt.savefig('transit_light_curve.png')
plt.show()
