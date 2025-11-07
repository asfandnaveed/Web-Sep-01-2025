# Functions in Python

# def greet():
#     print('Hello user')

# # function calling
# greet()

# function with parameters
# def add(x, y):
#     # print(x + y)
#     return x + y

# result = add(10, 5)
# print(result)

# Take two values from the user pass the values to the function, add those values and return the output outside the function

# def check_num(num):
#     if num % 2 == 0:
#         # print(f'{num} is even')
#         return f'{num} is even'
#     else:
#         return f'{num} is odd'

# print(check_num(5))
# print(check_num(7))
# print(check_num(4))

# Data Structures

# List

# name = 'Ahmed' #single value
numbers = [10, 21, 37, 40]
# print(numbers[0])

# for x in numbers:
#     print(x)
# -----------------------
# def check_list(nums):
#     for x in nums:
#         if x % 2 == 0:
#             return 'Even'
#         else:
#             return 'Odd'
    
# print(check_list(numbers))

# def is_even(num):
#     return num % 2 == 0

# for x in numbers:
#     if is_even(x):
#         print(f'{x} is even')


# variable scopes
x = 'global' 
# x = 'local'

def var_scopes():
    global x
    x = 'local'
    print(x)

var_scopes()
print(x)


