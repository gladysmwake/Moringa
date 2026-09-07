import math


class Shape:
    def __init__(self, shape_name):
        self.shape_name = shape_name
        
    def shape_description(self):
        print(f"This is a {self.shape_name}")
        
    def display_shape_info(self):
        print("-*-*" * 10)
        print(f"Shape : {self.shape_name}")
        print(f"Area : {self.area()}")
        print(f"Perimeter : {self.perimeter()}")
        print("-*-*" * 10)
        
           

class Rectangle(Shape):
    def __init__(self, length, width):
        super().__init__(shape_name = "Rectangle")
        
        self.length = length
        self.width = width
        
    def area(self):
        return self.length * self.width 
    
    def perimeter(self):
        return 2 * (self.length + self.width)    

class Circle(Shape):
    def __init__(self, radius ):
        super().__init__(shape_name = "Circle")
    
        self.radius = radius
    
    def area(self):
        return math.pi * self.radius **2
    
    
C1 = Circle(radius=9)
print("Shape name: ", C1.shape_name)
print("Area is : ", f"{C1.area():.4f}")
