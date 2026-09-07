class MaintenanceLog:
    def __init__(self, vehicle_plate_number, maintenance_date, maintenance_type, cost):
        self.vehicle_id = vehicle_plate_number
        self.maintenance_date = maintenance_date
        self.maintenance_type = maintenance_type
        self.cost = cost

    def display_info(self):
        return f"Vehicle ID: {self.vehicle_id}, Maintenance Date: {self.maintenance_date}, Maintenance Type: {self.maintenance_type}, Cost: ${self.cost}"