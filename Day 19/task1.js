//Check if a number is positive or negative

function Signcheck(num) {
  if (num > 0) {
    return "Positive";
  } 
  else if (num < 0) {
    return "Negative";
  } 
  else {
    return "Zero";
  }
}
   
console.log(Signcheck(-3));   


//Print numbers from 1 to 20

for(let i=1; i <=20; i++){
    console.log(i);
    
}

//Find even numbers between 1 and 10

for(let i=1; i<=10; i++){
    if(i % 2 === 0){
        console.log(i);
        
    }
}

//Explain difference between while and do...while

let i=1;
while(i<=5){
    console.log(i);
    i++;
    
}//May not execute at all if the condition is initially false

let a=1;
do{
    console.log(a);
    a++;
    
}
while (a<=5);//Guaranteed to execute at least once, even if the condition is initially false

//Write a switch example

let day=15

switch (day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log(Wednesday);
        break;
    default:
        console.log('not a day');
        
}