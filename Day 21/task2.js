//Calculator Functions (add, subtract, multiply, divide)

function add(num1,num2){
    return num1 + num2;
}

function sub(num1,num2){
    return num1 - num2;
}

function mul(num1,num2){
    return num1 * num2;
}

function div(num1,num2){
    if(num2 === 0){
        return 'Division by zero is not allowed'
    }
    return num1 / num2;
}

const num1= 10;
const num2=5;

console.log(`addition of ${num1} and ${num2} is  ${add(num1,num2)} `);

console.log(`subtraction of ${num1} and ${num2} is  ${sub(num1,num2)} `);

console.log(`multiplication of ${num1} and ${num2} is  ${mul(num1,num2)} `);

console.log(`division of ${num1} and ${num2} is  ${div(num1,num2)} `);


//Odd / Even Checker

function evenorodd(num){
    if(num % 2 === 0){
        return 'it is a even number';
    }else{
        return 'it is a odd number';
    }
}

console.log(evenorodd(35));

//Area Calculator (circle, rectangle)

function areacalculator(choice, a, b){
    switch (choice){
        case 'circle':
            console.log('Area of circle =',Math.PI *a*a);
            break;

            case 'rectangle':
                console.log('Area of rectangle:',a*b);
                break;
                default:
                    console.log('Invalid choice');
                    
    }
    
}

areacalculator('circle',6);
areacalculator('rectangle',12,14);


//Greeting App using user name

function greeting(name){

    if(name === null || name.trim() === ''){
        console.log('Enter your name');
         
    }else{
        console.log('hello ' + name + '! welcome');
    }
}

greeting('Agilan');

//Simple Menu Program using functions

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

menu(3);
menu();
