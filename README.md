# Practice-redo (3rd month)
able to follow tutorials doesn't mean you know how to build it from scratch. So, I decided to redo all the free code camp projects I have done.

However, for my current skill level it is unrealistic to create apps completely from scratch without referencing to any frame and logic of an app. So, the best way I can think of is, watch tutorial first, then customize the code and add new concepts as much as I can. 

This way, I believe is the most effective method for me to improve.


## Rebuilt list
- [Calculator(JS)](https://a331998513.github.io/Practice-redo/JScalculator/) 

## My version vs tutorial  _(code comparison)_
>[Calculator(JS)](https://github.com/a331998513/Practice-redo/blob/main/JScalculator/calculator.js) VS [Tutorial](https://github.com/abarna-codespot/A-simple-Calculator/blob/master/script.js) 



## Challenges
### with Calculator

**The biggest challenge was to prevent new numbers to merge with output results. **

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
