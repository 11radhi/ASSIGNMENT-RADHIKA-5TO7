// Define OOP in your own words

let opp=`object oriented language in js is to organize code around object`

console.log(opp);

// Create a simple class

class car{
    constructor(brand,model){
        this.brand = brand;
        this.model = model;
    }
    showdetails(){
        return `I have a ${this.brand}  ${this.model}`;
    }

}

const mycar = new car('toyota', 'corolla');

console.log(mycar.showdetails());


// Explain this keyword

let keyword=`In JavaScript, this refers to the object that calls the function, 
and its value is determined at runtime based on how the function is invoked.`

console.log(keyword);

// Create an array of objects

const people =[
    {firstname: 'john', lastname: 'jacobs', age: 30},
    {firstname: 'sherlock', lastname: 'homes', age: 32},
    {firstname: 'michael', lastname: 'kars', age: 34}
];

console.log(people);

console.log(people[0].firstname);

// Identify parent and child class

class Animal{
    speak(){
        console.log('Animal makes a sound');
        
    }
}

class dog extends Animal{
    bark(){
        console.log('Dog barks');
         }
}

const dog1 = new dog();

dog1.speak();
dog1.bark();


