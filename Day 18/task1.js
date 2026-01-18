//Add two numbers using arithmetic operators
function add(a,b) {
    return a+b;
}
console.log(add(25,55));

//Update a variable using +=
let score = 50
score += 20
score += 40

console.log(score);

//Compare two values using ===
let a=100
let b=200

console.log(a === b);

let x=20
let y=20

console.log(x === y);

//Write an if condition for age check

function adult(age) {
    if (age>=18){
        return 'You are an adult'
    
}
else{
    return 'You are not an adult'
    
}




}
console.log(adult(11));

//Create a switch with 3 cases

let day=14

switch (day) {
    case 1:
        console.log('Monday');
        
        break;
        
    case 2:
        console.log('Tuesday');
        
        break;

    case 3:
       console.log('Wednesday');
       
        break;

    default:
        console.log('Not a weekday');
        break;
}


