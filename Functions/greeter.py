import random

def display_word(word, guessed_letters):
    """Show the word with guessed letters revealed, others as blanks."""
    display = ""
    for letter in word:
        if letter.lower() in guessed_letters:
            display += letter + " "
        else:
            display += "_ "
    return display.strip()

def get_guess(guessed_letters):
    """Ask the player for a single letter, validate it."""
    while True:
        guess = input("Guess a letter: ").lower()
        if len(guess) != 1 or not guess.isalpha():
            print("Please enter a single letter.")
        elif guess in guessed_letters:
            print("You already guessed that letter.")
        else:
            return guess

def give_hint(word, guessed_letters):
    """Reveal one unguessed letter, at the cost of an attempt."""
    for letter in word.lower():
        if letter not in guessed_letters:
            guessed_letters.add(letter)
            print(f"Hint: the word contains '{letter}'")
            return
    print("No more hints available — every letter is already guessed!")

def play_hangman():
    word_list = ["apple", "orange", "math", "movie"]
    secret_word = random.choice(word_list)

    guessed_letters = set()
    attempts = 0
    max_attempts = 5

    print("\nWelcome to Hangman!")
    print(f"You have {max_attempts} attempts. Type 'hint' anytime to reveal a letter (costs an attempt).\n")

    while attempts < max_attempts:
        print(display_word(secret_word, guessed_letters))
        print(f"Attempts left: {max_attempts - attempts}")

        user_input = input("Guess a letter (or type 'hint'): ").lower()

        if user_input == "hint":
            give_hint(secret_word, guessed_letters)
            attempts += 1
            continue

        if len(user_input) != 1 or not user_input.isalpha():
            print("Please enter a single letter.")
            continue

        if user_input in guessed_letters:
            print("You already guessed that letter.")
            continue

        guessed_letters.add(user_input)

        if user_input not in secret_word.lower():
            attempts += 1
            print(f"Wrong guess! '{user_input}' is not in the word.")
        else:
            print(f"Nice! '{user_input}' is in the word.")

        # check win condition
        if all(letter.lower() in guessed_letters for letter in secret_word):
            print(f"\nYou win! The word was '{secret_word}'.")
            return

    print(f"\nGame over! The word was '{secret_word}'.")


def greet_user():
    name = input("What is your name? ")
    age = input("How old are you? ")

    try:
        age = int(age)
        print(f"Got it, you are {age} years old.")
    except ValueError:
        print("That's not a valid number. Please enter digits only.")

    nickname = input("What nickname do you prefer? ")
    print(f"Nice to meet you, {name}!")
    print(f"I'll call you {nickname} from now on.")
    print(f"Soo.....{nickname} , do you wanna play a game?")
    answer = input("Do you wanna play a game? (yes/no) ").lower()

    if answer == "yes":
        print("Great! Here are the instructions...")
        play_hangman()
    else:
        print("Ok :(")


greet_user()