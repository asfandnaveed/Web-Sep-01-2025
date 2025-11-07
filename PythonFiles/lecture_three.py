# Modules:
# 1. Python / Built-in Modules

import math
# from math import sqrt, pi

# print(pi)
# print(sqrt(8))

# --------------------
# num = int(input('Enter a number: '))
# print(f'Square root: {math.sqrt(num)}')
# print(f'Factorial: {math.factorial(num)}')
# print(f'Floor: {math.floor(math.sqrt(num))}')

# 2. Custom Modules
# import new_math

# print(new_math.add(4, 9))
# print(new_math.multiply(4, 9))

# --------------
# import constants as const
# print(const.CITY)

# ----------------
# import random
# print(random.randint(1, 10))

# lucky draw
# users = ['Ahmed', 'Faizan', 'Abdullah', 'Talha', 'Athar' , 'Tahoor']

# winners = random.sample(users, 3)
# print(winners)

# 3. Third-party Modules
# pip: pip installs packages

# import pandas as pd
# import numpy as np


# Random password generator
import random
import string

characters = string.ascii_letters + string.digits + string.punctuation

password = ''.join(random.choice(characters) for _ in range(10)) 

print(f'Random password: {password}')




