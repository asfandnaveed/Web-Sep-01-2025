# Exception Handling
# try:
#     num1 = int(input('Enter an integer: '))
#     num2 = int(input('Enter another integer: '))
#     division = num1 / num2
#     print(division)

# # except:
# #     print('Something went wrong')

# # handling specific exceptions
# except ZeroDivisionError:
#     print('Division by zero is not allowed')

# except ValueError:
#     print('Value is invalid.')

# except Exception as e:
#     print(f'Error: {e}')

# else:
#     print(f'Result: {division}')

# finally:
#     print('Execution Completed')

# File handling with exception handling
def readFile(filename):
    try:
        with open(filename, 'r') as file:
            content = file.read()
    
    except FileNotFoundError:
        print('File not found.. Create a file first')

    except Exception as e:
        print(f'Unexpected error: {e}')
    
    else:
        print(f'File content: \n {content}')

file_name = input('Enter a file name: ')
readFile(file_name)

# File handling outside the active directory

# Using Absolute path

file = open('C:/Users/Guest/Documents/file1.txt', 'w')
# 'D:/foldername/filename'
file.write('Creating a file outside the current directory')

# Dynamic path using os module
import os

# path = os.path.join('C:/', 'Users', 'Guest', 'Document', 'file2.txt')

# file = open(path, 'w')
# file.write('Creating a path using OS module')
# file.close()

# creating a folder with OS module
folder_path = os.path.join('D:/', 'Test')
file_path = os.path.join(folder_path, 'file3.txt')

# creating a folder
os.makedirs(folder_path)

# creating a file
with open(file_path, 'w') as file:
    file.write('')



