# # taking multiple inputs with sqlite & Web scrapping

# # Sqlite3

# import sqlite3

# conn = sqlite3.connect('sample_data.db')

# cursor = conn.cursor()

# cursor.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, age INTEGER)")

# n = int(input("How many records do you want to enter: "))
# # inserting data into sqlite table

# for i in range(n):
#     name = input('Enter your name: ')
#     age = int(input('Enter your age: '))

# # cursor.execute("INSERT INTO users (name, age) VALUES ('ahmed', 20)")
#     cursor.execute("INSERT INTO users (name, age) VALUES (? , ?)",(name, age))

# conn.commit()

# # reading data from sqlite table
# cursor.execute("SELECT * FROM users")
# rows = cursor.fetchall()
# for row in rows:
#     print(row)

# Web Scrapping

import requests
from bs4 import BeautifulSoup

# url = 'https://www.geeksforgeeks.org/python/python-programming-language-tutorial/'

# response = requests.get(url)

# soup = BeautifulSoup(response.text, 'html.parser')

# extracting all h1 tags
# headings = soup.find_all('h1')

# for heading in headings:
#     print(heading.text)

# printing the page title
# print(f'Page Title: {soup.title.text}')


# extracting data using user input


url = input('Enter the URL: ')

response = requests.get(url)


if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')
    tag = input('Enter the tag name: ')

    elements = soup.find_all(tag)

    if elements:
        print('---- Elements Found -----')
        for index, elem in enumerate(elements[:5], start = 1):
            print(f'{index}: {elem.text}')
    else:
        print('No elements found')

else:
    print('Page not found. Check the URL')