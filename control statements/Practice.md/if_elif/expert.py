side_a = float(input("Please enter the length of side A: "))
side_b = float(input("Please enter the length of side B: "))
side_c = float(input("Please enter the length of side C: "))

if side_a == side_b == side_c:
    print("This is an Equilateral triangle")
elif side_a == side_b or side_a == side_c or side_b == side_c:
    print("This is an Isosceles triangle")
else:
    print("This is a Scalene triangle")