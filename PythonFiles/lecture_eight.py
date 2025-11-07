# Menu driven calculator using Functions, exception handling, Python I/O, Loops and File handling

# defining functions for arithmetic operations

# def add(num1, num2):
#     return num1 + num2

# def subtract(num1, num2):
#     return num1 - num2

# def multiply(num1, num2):
#     return num1 * num2

# def divide(num1, num2):
#     try:
#         return num1 / num2
#     except ZeroDivisionError:
#         print('Division by zero is not allowed')

# def save_to_file(operation, num1, num2, result):
#     try:
#         with open('calculator.txt', 'w') as file:
#             file.write(f'Result: {operation} {num1} , {num2} -> {result}')
    
#     except Exception as e:
#         print(f'Error: {e}')

# # while loop for taking inputs from the user

# while True:

#     print('\n ----- Python Calculator ------')
#     print('1. Addition')
#     print('2. Subtraction')
#     print('3. Multiplication')
#     print('4. Division')
#     print('5. Exit')

#     choice = input('Choose an option: ')
#     if choice == '5':
#         print('Thank you for using our calculator')
#         break

#     if choice in ['1', '2', '3', '4']:
#         try:
#             num1 = float(input('Enter first number: '))
#             num2 = float(input('Enter second number: '))

#             if choice == '1':
#                 # print(f'Result: {add(num1, num2)}')
#                 result = add(num1, num2)
#                 operation = 'Addition'

#             elif choice == '2':
#                 # print(f'Result: {subtract(num1, num2)}')
#                 result = subtract(num1, num2)
#                 operation = 'Subtraction'

#             elif choice == '3':
#                 # print(f'Result: {multiply(num1, num2)}')
#                 result = multiply(num1, num2)
#                 operation = 'Multiplication'

#             elif choice == '4':
#                 # print(f'Result: {divide(num1, num2)}')
#                 result = divide(num1, num2)
#                 operation = 'Division'
            
#             print(f'Result: {result}')
#             save_to_file(operation, num1, num2, result )


#         except ValueError:
#             print('Error: Invalid Value')
#     else:
#         print('Invalid Choice. Please Select from 1 to 5')

# Sqlite3

import sqlite3

conn = sqlite3.connect('sample_data.db')

cursor = conn.cursor()

cursor.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER)")

# inserting data into sqlite table
name = input('Enter your name: ')
age = int(input('Enter your name: '))

# cursor.execute("INSERT INTO users (name, age) VALUES ('ahmed', 20)")
cursor.execute("INSERT INTO users (name, age) VALUES (? , ?)",(name, age))

conn.commit()

# reading data from sqlite table
cursor.execute("SELECT * FROM users")
rows = cursor.fetchall()
for row in rows:
    print(row)

# extension: sqlite3 editor
