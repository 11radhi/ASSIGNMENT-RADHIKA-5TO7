//Define a javascript object

//A javscript object is a datatypes used to store collection of 
//data in the form of Key.


//Create an object with 3 properties

function Car(brand, color, value) {
  this.brand = brand;
  this.color = color;
  this.value = value;
}
const myCar = new Car("Toyota", "Red", 200000);

console.log(myCar);

//Access one property using dot notation

console.log(myCar.brand);

//Add a new property to an object

myCar.owner = 'Radhika';

console.log(myCar);

//Delete a property from an object

delete myCar.owner;
console.log(myCar);



