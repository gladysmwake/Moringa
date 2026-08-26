command = input("What is the command?....is it start or stop or pause/hold?: ")

match command:
    case "start":
        print("Starting...")
    case "stop":
        print("Stopping...")
    case "pause" | "hold":       # matches either value
        print("Pausing...")
    case other if len(other) > 10:   # guard clause: extra condition
        print("Unknown long command")
    case _:
        print("Unrecognized command")   # default/fallback