//Simple Calculator using if

function add() {
    let a= Number(document.getElementById('num1').value);
    let b= Number(document.getElementById('num2').value);

    document.getElementById('result').textContent='Result:'+ (a+b);
}

function sub() {
    let a= Number(document.getElementById('num1').value);
    let b= Number(document.getElementById('num2').value);

    document.getElementById('result').textContent='Result:'+ (a-b);
}

function mul() {
    let a= Number(document.getElementById('num1').value);
    let b= Number(document.getElementById('num2').value);

    document.getElementById('result').textContent='Result:'+ (a*b);
}

function div() {
    let a= Number(document.getElementById('num1').value);
    let b= Number(document.getElementById('num2').value);

    if (b === 0){
        document.getElementById('result').textContent= 'cannot divide by zero';
    }else {
            document.getElementById('result').textContent='Result:'+ (a/b);

    }

}


//Multiplication table using loop

const number = 5;
const range = 10;

console.log(`Multiplication table of ${number}`);

for ( let i=1; i <= range; i++){
    const result = number * i;
    console.log(`${number} x ${i} = ${result}`);
    
}


//Login validation (username & password check)

function login(){
    const user = document.getElementById('userName').value;
    const pass = document.getElementById('passWord').value;
    const message = document.getElementById('message');

    const validUser='admin';
    const validPass='admin@123';

    if (user === validUser && pass === validPass){
        message.style.color ='green';
        message.textContent = 'login successfully';

    } else{
        message.style.color = 'red';
        message.textContent = 'Invalid username or password';
    }


}

//Grade system using if else

function grading(percentage) {
    if (percentage >= 90 && percentage <= 100){
        return 'A';
    }else    if (percentage >=80){
        return 'B';
    }else    if (percentage >=70){
        return 'c';
    }else    if (percentage >=60){
        return 'D';
    }else    if (percentage >=50){
        return 'E';
    }else {
             return 'Fail';
    }
         
    
}

console.log('Grade:',grading(55));

console.log('Grade:',grading(65));

console.log('Grade:',grading(75));

//Menu program using switch

let choice =5

switch (choice){
    case 1:
        console.log('You have selected option A');
        break;
    case 2:
        console.log('You have selected option B');
        break;
    case 3:
        console.log('You have selected option C');
        break;
    default:
        console.log('choose between 1 - 3');
        
        
        
        
}



