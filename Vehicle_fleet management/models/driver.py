class Driver:
    def __init__(self, driver_name, licence_number, assigned_vehicle=None):
        self.driver_name = driver_name
        self.licence_number = licence_number
        self.assigned_vehicle = assigned_vehicle
        
    def assign_vehicle(self, vehicle):
        self.assigned_vehicle = vehicle
        
    def display_info(self):
        vehicle_info = self.assigned_vehicle.display_info() if self.assigned_vehicle else "No vehicle assigned"
        return f"Driver Name: {self.driver_name}, Licence Number: {self.licence_number}, Assigned Vehicle: {vehicle_info}"
    