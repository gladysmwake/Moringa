#Weight of a package is given by the user (in kg).
#If weight is over 10kg, shipping costs $50.
#Otherwise, shipping costs $20.
#Print the shipping cost.

package_weight = int(input("Input the weight of you package...in kg: "))

if package_weight > 10:
    shipping_cost = 50
else:
    shipping_cost = 20
    
print("The shipping cost is ", shipping_cost)
    
    