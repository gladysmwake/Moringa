class Route:
    def __init__(self, route_name, start_location, end_location, distance):
        self.route_id = route_name
        self.start_location = start_location
        self.end_location = end_location
        self.distance = distance

    def display_info(self):
        return f"Route ID: {self.route_id}, Start Location: {self.start_location}, End Location: {self.end_location}, Distance: {self.distance} km"