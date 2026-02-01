import random

def add(a, b): return a + b

def subtract(a, b): return a - b

def multiply(a, b): return a * b

def divide(a, b): try: result = a / b; except ZeroDivisionError: print('Cannot divide by zero'); else: print(result)

if __name__ == '__main__': user_input1= int(input( 'Enter first number:' ) ); user_input2= int(input('Enter second number : '));
applied_operation= input ('Enter operation (+, -, *, /) : ').lower()
switch (applied_operation): case '+': print(add(user_input1,user_input2)) break; case '-': print(subtract(user_input1,user_input2)) break;
case '*':print(multiply(user_input1,user_input2));break; case '/':divide(user_input1, user_input2);