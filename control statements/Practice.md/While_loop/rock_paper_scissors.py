import random

choice_list = ["rock", "paper", "scissors"]

beats = {
    "rock": "scissors",
    "scissors": "paper",
    "paper": "rock"
}

comp_wins = 0
user_wins = 0

while comp_wins < 2 and user_wins < 2:
    comp_choice = random.choice(choice_list)
    user_choice = input("Rock, Paper, Scissors...buddy: ")

    if user_choice == comp_choice:
        print("It's a tie! Computer chose", comp_choice)
    elif beats[user_choice] == comp_choice:
        print("You win this round! Computer chose", comp_choice)
        user_wins += 1
    else:
        print("You lose this round! Computer chose", comp_choice)
        comp_wins += 1

    print("Score — You:", user_wins, " Computer:", comp_wins)

if user_wins > comp_wins:
    print("You won the match!")
else:
    print("Computer won the match!")