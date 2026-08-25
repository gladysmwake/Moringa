# for comments in python....we use the hash symbol
"""For multi-line comments we use this"""

xe=34.6
print("xe is =",xe, )
print("type of xe is =", type(xe))
ye=True
print("ye is =",ye, ", type of ye is =", type(ye))
ze=xe+ye
print("ze is =",ze, ", type of ze is =", type(ze))

#boolean is treated as a subclass of an integer...soo True is 1 and False is 0
#hence the result of Z

#here are the diffrent data types we have in python

# Example variables
x = 10          # Integer
y = 3.14        # Float
z = "Hello"     # String
a = True        # Boolean<True, False>
b = [1, 2, 3, 4]  # List <Array> Mutable <By value>
c = {1, 2, 3}   # Set
d = (1, 2, 3)   # Tuple <List> Immutable
e = {"key": "value"}
# Dictionary <Object:js>
# for dictionary use Bracket notation

# Determining the types
# `y is ${}`
print("X is ", x, "Its type ", type(x))  # Output: <class 'int'>
print(f"Y is {y} its type is {type(y)}")  # Output: <class 'float'>
print(type(z))  # Output: <class 'str'>
print(type(a))  # Output: <class 'bool'>
print(type(b))  # Output: <class 'list'>
print(type(c))  # Output: <class 'set'>
print(type(d))  # Output: <class 'tuple'>
print(type(e))  # Output: <class 'dict'>