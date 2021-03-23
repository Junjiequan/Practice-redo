# Practice-redo and some more(3rd month)
well.

## Rebuilt list
- [Calculator(JS)](https://a331998513.github.io/Practice-redo/JScalculator/) 
- [TodoList(JS)](https://a331998513.github.io/Practice-redo/TodoList/)




## Challenges

### Calculator

**The biggest challenge was to prevent new numbers to merge with output results.**

Problem example:
```
input section  1 + 1 
output section 2
In this scenario, click 3 will change output and display 23. 
As input will first appears in the output section then operator triggers function to send value into input section.
```
Solution:
```
1. add classlist ('occupied') to the element's class everytime '=' sign is clicked.
2. Click numbers check if the output contains 'occupied' class. 
3. If yes, remove class and clear output. If no, output clicked number.
```
