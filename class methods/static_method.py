# Static <it does not change>, <class properties> properties. <Belong to the class>
# Static Method <>. Class method. <Function belongs to the class>
# Why would you want to use a class property?

class BankAccount:
    clients = 0
    bank_name = "Bank of Python"

    def __init__(self, client_name, balance, account_no):
        self.client_name = client_name
        self.balance = balance
        self.account_no = account_no
        
        BankAccount.add_client()

    @property
    def balance(self):
        print("Somebody tried to read Juliets balance")
        return self._balance

    @balance.setter
    def balance(self, value):
        if not isinstance(value, (int, float)):
            print("Balance must be a number")
            return
        if value < 0:
            print("Balance cannot be negative/less than 0")
            return
        self._balance = value

    def deposit(self):
        pass

    def withdraw(self):
        pass

    def show_account_details(self):
        return f"Client Name: {self.client_name}, Balance: {self.balance}, Account Number: {self.account_no}"
    
    @staticmethod
    def calculate_interest(amount, year):
        rate = 10
        interest_per_year = amount * (rate/ 100)
        interest_total = interest_per_year * year
        total = amount + interest_total
        print(f"If you take a loan of ${amount}, interest rate per year {interest_per_year}")
        print(f"Total interest {interest_total}, total to pay {total} after {year}")
        
    @classmethod
    def add_client(cls):
        cls.clients += 1
        print(f"Total clients: {cls.clients}")


Juliet = BankAccount("Juliet", 1000, "123456789")
balance = float(input("Enter the new balance: "))
Juliet.balance = balance
print(Juliet.balance)
print(Juliet.show_account_details())
Juliet.calculate_interest(1000, 2)