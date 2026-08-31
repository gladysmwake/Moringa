import random

word_list = ["python", "loop", "guess", "syntax", "variable"]
secret_password = random.choice(word_list)

guess = ""
attempts = 0
max_attempts = 5

while guess != secret_password and attempts < max_attempts:
    guess = input("Guess the password: ")
    attempts += 1

    if len(guess) != len(secret_password):
        print("Wrong length")
    elif guess != secret_password:
        print("Right length, wrong password")
    else:
        print("You've got it...you hacker!")

if guess != secret_password:
    print("Out of attempts! The password was", secret_password)