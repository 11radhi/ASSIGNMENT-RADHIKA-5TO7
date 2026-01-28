// What is an error in JavaScript?

//An error is a problem in code that stops the program from running correctly.

// Difference between syntax and runtime errors

/*Error caused by wrong syntax are called syntax error.Error

Error that occurs while the program is running called runtime error.*/

// Identify a logical error in given code

let sum = 5 + "5";
console.log(sum); 

/*This is a logical error because the program executes without crashing but produces
an incorrect result due to type mismatch.*/

// Write a simple try...catch example

try{
    let y=9;
    let x= y+5;
    
    console.log(x);
    
}catch(error){
    console.log("Error occured");
    

}

// Explain why errors are important

/*Preventing Application Crashes and Silent Failures
Enhancing Code Quality and Logic
Improving User Experience*/

