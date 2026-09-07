class LightBulb:
    def __init__(self, brand, location):
        self.brand = brand
        self.location = location
        self.is_on = False

    def turn_on(self):
        self.is_on = True

    def turn_off(self):
        self.is_on = False
        
    def __str__(self):
        status = "On" if self.is_on else "Off"
        return f"LightBulb(Brand: {self.brand}, Location: {self.location}, Status: {status})"
    
bulb1 = LightBulb("Philips", "Living Room")
print(bulb1)