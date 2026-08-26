#A person's annual income is given by the user.
#Calculate their tax based on these brackets:
 # - Income up to $10,000: 0% tax
  #- Income from $10,001 to $40,000: 10% tax
  #- Income from $40,001 to $100,000: 20% tax
  #- Income above $100,000: 30% tax

#Only the portion of income within each bracket is taxed at that bracket's rate 
#(this is how real tax brackets work — it's progressive, not flat).

#Print the total tax owed.


annual_income = float(input("What is your annual income: "))

if annual_income <= 10000:
    tax = annual_income * 0
elif annual_income <= 40000:
    tax = annual_income * 0.10
elif annual_income <= 100000:
    tax = annual_income * 0.20
else:
    tax = annual_income * 0.30

print("Total tax owed is:", tax)

    