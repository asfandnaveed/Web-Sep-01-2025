# # Step 2
# def read_file():
#     # reading the data from the txt file
#     with open('sample.txt', 'r') as file:
#         file_content = file.read()
#     # returning the data in the form of a string
#     return file_content

# # Step 3

# def read_file_into_list():
#     # reading the file line by line
#     with open('sample.txt', 'r') as file:
#         lines = file.readlines()

#     # returning the list of lines
#     return lines

# # Step 4 

# def write_first_line_to_file(file_contents, output_filename):
#     first_line = file_contents.split('\n')[0]

#     with open(output_filename, 'w') as output_file:
#         output_file.write(first_line)

# # Step 5

# def read_even_numbered_lines():
#     even_lines = []
#     with open('sample.txt', 'r') as file:
#         for index, line in enumerate(file, start=1):
#             if index % 2 == 0:
#                 even_lines.append(line)
#     return even_lines   

# # Step 6
# def read_file_in_reverse():
#     with open('sample.txt', 'r') as file:
#         lines = file.readlines()
#     return lines[::-1]




# # Testing the code
# print(f'Full content of the file:\n {read_file()}')
# print(f'\nFile content in a list:\n {read_file_into_list()}')

# content = read_file()
# write_first_line_to_file(content, 'first_line.txt')

# print(f'\nEven numbered lines:\n {read_even_numbered_lines()}')
# print(f'Reverse list: \n {read_file_in_reverse()}')


# Working with sqlite in Python
import sqlite3

conn = sqlite3.connect('data.db')

cursor = conn.cursor()

# creating a table
cursor.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)")

# insert data into table
cursor.execute("INSERT INTO users (name, age) VALUES ('ahmed', 20)")
