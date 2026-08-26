pizza_size = input("What pizza size would you like you to order? ")
num_toppings = int(input("How many topics would you like? "))
deliver_distance = float(input("Input your distance...in miles: "))

if pizza_size == "small":
    base_cost = 8
elif pizza_size == "large":
    base_cost = 12
else:
    print("Invalid size")
    
toppings_cost = num_toppings * 1

if deliver_distance == 0:
    delivery_fee = 0
elif deliver_distance <= 5:
    delivery_fee = 2
else:
    delivery_fee = 2 + (deliver_distance - 5) * 1
    
pizza_cost = toppings_cost + base_cost

total_cost = pizza_cost + delivery_fee


    
print(f"\n--- Order Summary ---")
print(f"Pizza size: {pizza_size.capitalize()}")
print(f"Base cost: ${base_cost}")
print(f"Toppings ({num_toppings}): ${toppings_cost}")
print(f"Delivery fee ({deliver_distance} miles): ${delivery_fee:.2f}")
print(f"Total cost: ${total_cost:.2f}")