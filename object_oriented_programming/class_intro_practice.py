class Product:
    store = "Moringa Mart"
    currency = "KES"

    def __init__(self, name, price, quantity, category):
        self.name = name
        self.price = price
        self.quantity = quantity
        self.category = category


# ----- Product 1 -----
name1 = input("Enter product 1 name: ")
price1 = int(input("Enter product 1 price: "))
quantity1 = int(input("Enter product 1 quantity: "))
category1 = input("Enter product 1 category: ")

Product1 = Product(name1, price1, quantity1, category1)
Product1.total_price = Product1.price * Product1.quantity

print("=== Product 1 Details ===")
print(f"Store: {Product1.store}")
print(f"Name: {Product1.name}")
print(f"Category: {Product1.category}")
print(f"Price: {Product1.price} {Product1.currency}")
print(f"Quantity: {Product1.quantity}")
print(f"Total Price: {Product1.total_price} {Product1.currency}")
print("-" * 30)
print("-" * 30)



# ----- Product 2 -----
name2 = input("Enter product 2 name: ")
price2 = int(input("Enter product 2 price: "))
quantity2 = int(input("Enter product 2 quantity: "))
category2 = input("Enter product 2 category: ")

Product2 = Product(name2, price2, quantity2, category2)
Product2.total_price = Product2.price * Product2.quantity

print("=== Product 2 Details ===")
print(f"Store: {Product2.store}")
print(f"Name: {Product2.name}")
print(f"Category: {Product2.category}")
print(f"Price: {Product2.price} {Product2.currency}")
print(f"Quantity: {Product2.quantity}")
print(f"Total Price: {Product2.total_price} {Product2.currency}")
print("-" * 30)
print("-" * 30)



# ----- Grand Total -----
grand_total = Product1.total_price + Product2.total_price
print(f"Grand Total: {grand_total} {Product1.currency}")