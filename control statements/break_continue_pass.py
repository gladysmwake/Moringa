for number in range(1, 10):
    if number == 5:
        break          # stops the loop completely, nothing after this runs

    if number % 2 == 0:
        continue       # skips the rest of this iteration, goes to next number

    if number == 1:
        pass           # literally does nothing — a placeholder to avoid empty block

    print(number)