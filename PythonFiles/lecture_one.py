# Comments
# Single line comment
"""Here is a
Multi line comment"""


# Variables
x = 5 #integer
y = 2.5 #float
name = 'Ahmed' 
text = ''''This is a 
multi line string'''
print(text)


# Python I/O
# Type casting
# num1 = int(input('Enter first value: '))
# num2 = int(input('Enter second value: '))
# print(num1 + num2)

# swap variable values
a = 5
b = 10
c = 7
a = a + b #a = 15
b = a - b #b = 5
a = a - b #a = 10
print('a:', a)
print('b:', b) 

# built-in syntax
# a, b = b , a
# print(a, b)
# print(a)
# print(b)
# print('a:' , a, )

# output
# print(a, end=', ')
# print(b)

print(a, b, c, sep=' | ')
print('a: ', a, 'b: ', b)
print(f'a: {a}, b: {b}')

# conditional statements
num = 5
# if (num > 2){
#     # block of code
# }
num = input()
if num > 2:
    print('Code is true')
    
else:
    print('Code is false') 
