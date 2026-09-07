class Fleet:
    def __init__(self):
        self.vehicles = []
        self.drivers = []
        self.routes = []
        self.maintenance_logs = []

    def register_vehicle(self, vehicle):
        for v in self.vehicles:
            if v.plate_number == vehicle.plate_number:
                print("A vehicle with this plate number already exists.")
                return
        self.vehicles.append(vehicle)
        print(f"Vehicle {vehicle.plate_number} registered successfully.")
        
    def register_driver(self, driver):
        self.drivers.append(driver)
        print(f"Driver {driver.driver_name} registered successfully.")

    def register_route(self, route):
        self.routes.append(route)
        print(f"Route {route.route_id} registered successfully.")

    def log_maintenance(self, maintenance_log):
        self.maintenance_logs.append(maintenance_log)
        print(f"Maintenance log for {maintenance_log.vehicle_id} recorded successfully.")