class BankAccount:
    # This runs automatically when we create a new account
    # Example: BankAccount("John", 1000, "12345")
    def __init__(self, owner_name, balance, account_number):
        self.owner_name = owner_name        # goes through the "checker" below
        self.balance = balance              # goes through the "checker" below
        self.account_number = account_number  # goes through the "checker" below

    # ============================================
    # OWNER NAME — getter and setter
    # ============================================

    # GETTER: this runs when someone tries to READ the name
    # Example: print(account.owner_name)
    @property
    def owner_name(self):
        return self._owner_name   # just hand back the stored value

    # SETTER: this runs when someone tries to CHANGE the name
    # Example: account.owner_name = "Jane"
    @owner_name.setter
    def owner_name(self, new_name):
        # Check 1: is it actually text, and not just empty spaces?
        if not isinstance(new_name, str) or not new_name.strip():
            print("Name must be real text, not empty")
            return  # stop here, don't save the bad value

        # If we got this far, the name is good — save it
        self._owner_name = new_name

    # ============================================
    # BALANCE — getter and setter
    # ============================================

    # GETTER: runs when someone READS the balance
    # Example: print(account.balance)
    @property
    def balance(self):
        return self._balance

    # SETTER: runs when someone CHANGES the balance
    # Example: account.balance = 500
    @balance.setter
    def balance(self, new_amount):
        # Check 1: is it a number (not text or something weird)?
        if not isinstance(new_amount, (int, float)):
            print("Balance must be a number")
            return

        # Check 2: money can't be negative
        if new_amount < 0:
            print("Balance can't be negative")
            return

        # If we got this far, the amount is good — save it
        self._balance = new_amount

    # ============================================
    # ACCOUNT NUMBER — getter and setter
    # ============================================

    @property
    def account_number(self):
        return self._account_number

    @account_number.setter
    def account_number(self, new_number):
        if not isinstance(new_number, str) or not new_number.strip():
            print("Account number must be real text, not empty")
            return

        self._account_number = new_number

    # ============================================
    # NORMAL METHODS (unchanged logic, just comments added)
    # ============================================

    def deposit(self, amount):
        # Adding money in is only allowed if it's a positive number
        if amount <= 0:
            print("Deposit amount must be positive")
            return

        self.balance += amount   # this quietly goes through the setter above

    def withdraw(self, amount):
        # Only allow withdrawing money we actually have
        if amount <= 0:
            print("Withdrawal amount must be positive")
            return

        if amount <= self.balance:
            self.balance -= amount
        else:
            print("Insufficient funds")

    def show_account_details(self):
        print(f"Account Number: {self.account_number}")
        print(f"Owner Name: {self.owner_name}")
        print(f"Balance: {self.balance}")


# ============================================
# THIS IS WHERE THE PROGRAM ACTUALLY STARTS RUNNING
# ============================================

owner_name = input("Enter account owner's name: ")
balance = float(input("Enter starting balance: "))
account_number = input("Enter account number: ")

# Create the account — this calls __init__ up above
account = BankAccount(owner_name, balance, account_number)

# Ask for a deposit and add it
account.deposit(float(input("Enter deposit amount: ")))
account.show_account_details()

# Ask for a withdrawal and take it out
account.withdraw(float(input("Enter withdrawal amount: ")))
account.show_account_details()

