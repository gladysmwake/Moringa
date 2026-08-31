import random

secret_number = random.randint(1, 50)
guess = None
attempts = 0
max_attempts = 3

while guess != secret_number and attempts < max_attempts:
    guess = int(input("Guess a number between 1 and 50: "))
    attempts += 1

    if guess < secret_number:
        print("Too low")
    elif guess > secret_number:
        print("Too high")
    else:
        print("You got it!")

if guess != secret_number:
    print("Out of attempts! The number was", secret_number)