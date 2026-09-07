import sqlite3

def get_connection():
    conn = sqlite3.connect("fleet.db")
    with open("schema.sql") as f:
        conn.executescript(f.read())
    return conn

    if __name__ == "__main__":
        conn = get_connection()
        print("Database connected and table created.")