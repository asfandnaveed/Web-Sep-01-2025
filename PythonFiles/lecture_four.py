# 1. List comprehension
square = [x * x  for x in range(1, 6)]
print(square)

numbers = [1,2,3,4,5,6,7,8]
even_list = [num for num in range(1, 11) if num % 2 == 0]
even_list = [num for num in numbers if num % 2 == 0]
even_list = [num for num in range(len(numbers)) if num % 2 == 0]

print(even_list)

# using the standard for loop
# square = []
# for x in range(1, 6):
#     square.append(x * x)
# print(square)

# 2. Tasks related to previous topics

# 1. Write a program that takes 10 integers from the user and stores them in a list. Then:
# Print all even numbers
# Print all odd numbers

# 2. Ask the user to input marks of 5 subjects(stores them in a list). Calculate the average and assign a grade using if-else
# 90+ -> A
# 80-89 -> B
# 70-79 -> C


# 3. Map and filter with lambda
# lambda is a short anonymous function

# square = lambda x: x * x 
# add = lambda x, y: x + y
# print(square(4))
# print(add(4, 10))

# highest = lambda a , b: a if a > b else b
# print(f'largest value: {highest(87, 45)}')



# def square(x):
#     return x * x
# square()

# map with lambda

num_list = [1,2,3,4,5,6,7,8,9]

# even_list = list(map(lambda x : x % 2 == 0, num_list))
# even_list = list(filter(lambda x : x % 2 == 0, num_list))
# print(even_list)

# ----------------------

squared_list = list(map(la* x, num_list))
print(squared_list)


