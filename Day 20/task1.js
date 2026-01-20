//Print numbers from 1 to 10

for(let i=1; i <=10; i++){
    console.log(i);
    
}

//create a function to add two numbers

function add(a,b){
    return a+b;

}
const a=15;
const b=20;

const sum = add(a,b);

console.log(`The sum of ${a} and ${b} is : ${sum}`);

//Write a loop to print even numbers

for (let i=1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(i);
        
    }
}

//Explain difference between parameter & argument

//a parameter is a variable in a function's definition (a placeholder),
//while an argument is the actual value passed to the function 
//when it is called (the real data).



//Convert a normal function into arrow function

//normal function

function greet(name){
    return 'hello '+ name ;
}
const message= greet('Radhika');
console.log(message);


//arrow function

const greeting = (name) =>  `hello , ${name}!`;

const greetmsg = greeting('Radhika');

console.log(greetmsg);

