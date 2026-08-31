import random
import string

secret_password = "".join(random.choices(string.ascii_lowercase, k=8))

guess = ""            # ← starts as an empty string, not 0 — matches the type we're comparing
attempts = 0
max_attempts = 5

while guess != secret_password and attempts < max_attempts:
    guess = input("Guess the password: ")   # ← no int() — password is a string, keep it a string
    attempts += 1

    if len(guess) != len(secret_password):   # ← compare LENGTH, not the string itself
        print("Wrong length")
    elif guess != secret_password:
        print("Right length, wrong password")
    else:
        print("You've got it...you hacker!")

if guess != secret_password:
    print("Out of attempts! The password was", secret_password)