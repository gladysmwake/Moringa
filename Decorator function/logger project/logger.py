import os
import time
from datetime import date, datetime

# Directory of this script (logger project/), regardless of where you run it from
LOG_DIR = os.path.dirname(os.path.abspath(__file__))

def logger(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        diff_in_ms = round((end_time - start_time) * 1000, 2)
        today = date.today()
        timestamp = datetime.now().isoformat()

        filepath = os.path.join(LOG_DIR, f"{today}.txt")

        with open(filepath, "a") as f:
            f.write(f"ts:{timestamp}---func:{func.__name__}---time:{diff_in_ms}ms\n")
        return result
    return wrapper

@logger
def hello():
    print("Hello world")

@logger
def big_count():
    for i in range(0, 100):
        print(i)

hello()
big_count()