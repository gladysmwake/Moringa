class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width
        self.shape_name = "Rectangle"
        
    def area(self):
        area = self.length * self.width
        print(f"For a rectangle of length {self.length} and width {self.width} \n The area is : {area}")
      
        
class Square:
    
    def __init__(self, side):
        self.length = side
        self.width = side
        self.shape_name = "Square"
        
    def area(self):
        area = self.length * self.width
        print(f"For a square of length {self.length} and width {self.width} \n The area is : {area}")
        
print("-*-*" * 10)
print("-*-*" * 10)
R1 = Rectangle (length = 20, width = 10)
R1.area()
print(R1.shape_name)


print("-*-*" * 10)
print("-*-*" * 10)


S1 = Square(side = 20)
S1.area()

print("-*-*" * 10)
print("-*-*" * 10)

        
        