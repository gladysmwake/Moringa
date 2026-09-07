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


class ColorMixin:
    def show_color(self):
        print(f"Color : {self.color}")


class ColoredRectangle(ColorMixin, Rectangle):
    def __init__(self, length, width, color):
        super().__init__(length, width)
        self.color = color

class Circle(Shape):
    def __init__(self, radius ):
        super().__init__(shape_name = "Circle")
    
        self.radius = radius
    
    def area(self):
        return math.pi * self.radius **2
    
print("-*-*" * 10)
  
C1 = Circle(radius=9)
print("Shape name: ", C1.shape_name)
print("Area is : ", f"{C1.area():.4f}")

print("-*-*" * 10)
print("-*-*" * 10)


R1 = ColoredRectangle(length=20, width=10, color="blue")
R1.display_shape_info()
R1.show_color()
print("-*-*" * 10)
