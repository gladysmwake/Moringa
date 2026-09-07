def is_prime(num):
    for divisor in range(2, num):
        if num % divisor == 0:
            print(f"{num} is not prime, divisible by {divisor}")
            break
    else:
        print(f"{num} is prime")
        
is_prime(num = int(input("Enter a number: ")))