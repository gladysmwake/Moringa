def find_max(*args):
    biggest = args[0]
    for n in args:
        if n > biggest:
            biggest = n
    print(biggest)
    
find_max(4, 9, 2, 7)   # should print 9
find_max(15, 3)        # should print 15 

    