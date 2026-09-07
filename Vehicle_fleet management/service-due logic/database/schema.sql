CREATE TABLE IF NOT EXISTS vehicles (
    plate_number TEXT PRIMARY KEY,
    type TEXT,
    capacity INTEGER,
    mileage INTEGER,
    last_service_date TEXT
);