class BankAccount:
    def __init__(self, owner_name, starting_balance):
        self.owner_name = owner_name
        self.balance = starting_balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            return True
        return False

    def get_balance(self):
        return self.balance

    def __str__(self):
        return f"BankAccount(Owner: {self.owner_name}, Balance: ${self.balance:.2f})"
    
owner_name = input("Enter account owner's name: ")
starting_balance = float(input("Enter starting balance: "))
deposit_amount = float(input("Enter deposit amount: "))
account = BankAccount(owner_name, starting_balance)
account.deposit(deposit_amount)
print(account)