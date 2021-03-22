const historyNum = document.getElementById('inputsave');
const outputNum = document.getElementById('output');
// Output section
const getPrevNumber = () =>{
    return historyNum.innerText;
}
const printPrevNumber = (num) =>{
    historyNum.innerText = num;
}
const getOutputNum = () =>{
    return outputNum.innerText;
}
const printOutputNum = (num) =>{
    if(num == '') outputNum.innerText = num;
    else if(outputNum.innerText.length <= 13){
        return outputNum.innerText = formatNum(num)
    }
}
const formatNum = (num) =>{
    if(isNaN(num)) return '';
    let typeNumber = Number(num);
    let value = typeNumber.toLocaleString('en');
    return value;
}
const reverseformatNum = (num) =>{
    return num.replace(/,/g,'');
}
//processing section
const getNumArrays = Array.from(document.getElementsByClassName('number'));
const getSOperatorArrays = Array.from(document.getElementsByClassName('operator'));
const getSymArrays = Array.from(document.getElementsByClassName('symbols'));


//Operator processing //Condition check 
const runOperator = () =>{
    getSOperatorArrays.map((operator) =>{
        operator.addEventListener('click',()=>{
            //remove comma and get previous numbers
            let outputNum = reverseformatNum(getOutputNum());
            let prevNum = getPrevNumber();
            // check if output section have numbers
            if( outputNum != ''){
                // if yes then add it to previous number
                  prevNum = prevNum + outputNum;
                 if(operator.innerText == '='){
                     // if operator selection is = and last character is a number then calculate 
                    if(!isNaN(prevNum[prevNum.length-1])){
                        let result = eval(prevNum);
                        let resultString = result.toString();
                        // if value is over 12 characters long then slice it.
                        if(resultString.length >= 12 ){
                             printOutputNum(resultString.slice(0,12));
                             printPrevNumber('');
                             document.getElementById('output').classList.add('occupied');
                          //if not just run over.
                        } else {
                            
                            printOutputNum(result);
                            printPrevNumber('');
                            document.getElementById('output').classList.add('occupied');
                        }
                    }  
                    // if operator is not = and output has value then just add it to prev number
                 }  else {
                    
                    prevNum = prevNum + operator.innerText
                    printPrevNumber(prevNum);
                    printOutputNum('');
                 }
             // check if output section is empty
            }else if (outputNum == ''){
                //if output section has no value and operator onclick is not =, then replace last operator with new operator
                if(operator.innerText != '='){
                    let savedNum = historyNum.innerText;
                    let replaceLast = savedNum.slice(0,-1);
                    printPrevNumber(replaceLast + operator.innerText);
                // if operator onclick is =, then remove last operator symbol on input section and calculate.
                } else {
                    let replaceLast = prevNum.slice(0,-1);  
                    let result = eval(replaceLast);
                    printOutputNum(result);
                    printPrevNumber('');
                }
            }

        })
    })
}
//ClearEach and clearAll  //its pretty obvious.
const runSymbols = () =>{
    getSymArrays.map((symbols) =>{
        symbols.addEventListener('click', ()=>{
            if(symbols.id == 'clear'){
                printOutputNum('');
                printPrevNumber('');
            }
            else if(symbols.id == 'clearEach'){
                let outputNum = reverseformatNum(getOutputNum());
                let result = outputNum.slice(0,-1);
                printOutputNum(result);
            }
        })
    })
}
//Numbers input 
const runNumbers = () =>{
        getNumArrays.map((numbers)=>{
            numbers.addEventListener('click', ()=>{
                //check if output section is a result. if yes, then clear output section and add new number onClick
                if(outputNum.classList.contains('occupied')){
                    outputNum.classList.remove('occupied');
                    printOutputNum('');
                    printOutputNum(numbers.innerText);
                    // if no, then get output number without comma, then add onClick number to it.  
                }   else {
                    let flattenNumber = reverseformatNum(getOutputNum());
                    flattenNumber += numbers.innerText;
                    printOutputNum( flattenNumber );
                }
                })
            })
    } 

//run.
runNumbers();
runOperator();
runSymbols();