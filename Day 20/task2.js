//Multiplication Table Generator (function + loop)

function genmultable(num){
    console.log(`---Multiplication table for ${num}---`);

    for (let i=1; i <=10; i++){
        const result = num * i;
        console.log(`${num} x ${i} = ${result}`);
        
    }
    
}

genmultable(5);
genmultable(6);

//Simple Calculator using functions

function calculate(num1, operator, num2) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                return 'Error: Division by zero'; // Handle division by zero
            }
            break;
        default:
            return 'Invalid operator'; // Handle invalid operations
    }

    return result;
}

const number1 = 10;
const number2 = 5;
const operation = '+';

const calculationResult = calculate(number1, operation, number2);
console.log(`${number1} ${operation} ${number2} = ${calculationResult}`);

//Odd/Even Checker

function checkoddoreven(num){
if(num % 2 === 0){
    return num +'is Even';

}  else{
    return num + 'is odd'
}  
}

console.log(checkoddoreven(25));

//Factorial Calculator

function factorialIterative(n) {

    if (n < 0) {
    return "Error! Factorial for negative number does not exist.";
  }
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;
  
  for (let i = 2; i <= n; i++) {
    result *= i; 
  }

  return result;
}

console.log(`The factorial of 5 is: ${factorialIterative(5)}`); 
console.log(`The factorial of 10 is: ${factorialIterative(10)}`); 

//Menu Program using functions

function menu(choice){
    switch(choice){
        case 1:
        console.log('option 1');
        break;
        case 2:
        console.log('option 2');
        break;
        case 3:
        console.log('option 3');
        break;
        default:
        console.log('invalid option');     
        
    }
}

menu(1);
menu(3);
menu(2);
menu();





