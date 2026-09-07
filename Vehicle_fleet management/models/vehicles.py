class Vehicle:
    def __init__(self, plate_number, capacity, mileage, last_service_date, mileage_at_last_service=None):
        self.plate_number = plate_number
        self.capacity = capacity
        self.mileage = mileage
        self.last_service_date = last_service_date
        self.mileage_at_last_service = (
            mileage if mileage_at_last_service is None else mileage_at_last_service
        )

    def needs_service(self):
        return self._needs_service_at(5000)

    def _needs_service_at(self, mileage_limit):
        from datetime import datetime, timedelta

        mileage_since_service = self.mileage - self.mileage_at_last_service
        if mileage_since_service >= mileage_limit:
            return True

        last_service_datetime = datetime.strptime(self.last_service_date, "%Y-%m-%d")
        if datetime.now() - last_service_datetime >= timedelta(days=365):
            return True

        return False

    def calculate_capacity(self):
        return self.capacity

    def display_info(self):
        return f"Plate Number: {self.plate_number}, Capacity: {self.capacity}, Mileage: {self.mileage}, Last Service Date: {self.last_service_date}"

class Matatu(Vehicle):
    def __init__(self, plate_number, capacity, mileage, last_service_date, route_type, mileage_at_last_service=None):
        super().__init__(plate_number, capacity, mileage, last_service_date, mileage_at_last_service)
        self.route_type = route_type
        self.capacity = self.calculate_capacity()

    def needs_service(self):
        return self._needs_service_at(5000)

    def calculate_capacity(self):
        return 33 if self.route_type == "long-distance" else 14

    def display_info(self):
        return f"{super().display_info()}, Route Type: {self.route_type}"

class BodaBoda(Vehicle):
    def __init__(self, plate_number, capacity, mileage, last_service_date, engine_cc, mileage_at_last_service=None):
        super().__init__(plate_number, capacity, mileage, last_service_date, mileage_at_last_service)
        self.engine_cc = engine_cc
        self.capacity = self.calculate_capacity()

    def needs_service(self):
        return self._needs_service_at(2000)

    def calculate_capacity(self):
        return 1

    def display_info(self):
        return f"{super().display_info()}, Engine Capacity: {self.engine_cc}cc"