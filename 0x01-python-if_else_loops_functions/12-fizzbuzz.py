#!/usr/bin/python3
def fizzbuzz():
    for bata in range(1, 101):
        if (bata % 3 == 0 and bata % 5 == 0):
            print("FizzBuzz", end=' ')
        elif (bata % 3 == 0):
            print("Fizz", end=' ')
        elif (bata % 5 == 0):
            print("Buzz", end=' ')
        else:
            print(bata, end=' ')
