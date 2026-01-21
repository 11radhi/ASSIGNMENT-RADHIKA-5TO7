//Student Record Object (name, age, marks)

function student(name,age,mark){
    this.name =name;
    this.age = age;
    this.mark = mark;

}
const stu = new student('Radhika', 29 ,429);

console.log(stu);


//Car Object with method to display details

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayDetails() {
    console.log(`This car is a ${this.year} ${this.make} ${this.model}.`);
  }
}

const myCar = new Car('Toyota', 'Corolla', 2025);

myCar.displayDetails();


//User Profile Object with update option

let userprofile = {
    name: 'Radhika',
    age: 27,
    city: 'bangalore'
};

function update(property,newvalue){
    if(property in userprofile){
        userprofile[property] = newvalue;
        console.log(property + ' updated successfully');
        
    }else{
        console.log('property not found');
        
    }
}

console.log('Before update',userprofile);

update('age',29);
update('city','chennai');

console.log('After update:',userprofile);



//Product Object (price update logic)

let fruit = {
    name: 'Apple',
    quantity: 15,
    price: 2000
};

function fruitupdate(property,newvalue){
    if(property in fruit){
        fruit[property] = newvalue;
        console.log(property + ' updated successfully');
        
    }else{
        console.log('property not found');
        
    }
}

console.log('Before update',fruit);

fruitupdate('quantity',50);
fruitupdate('price',5000);

console.log('After update:',fruit);


//Simple Bank Account Object (deposit, withdraw)

let bankAccount = {
  accountHolder: "Radhika",
  balance: 5000,

  deposit: function(amount) {
    if(amount > 0) {
      this.balance += amount;
      console.log("Deposited Rs." + amount + ". New balance: Rs." + this.balance);
    } else {
      console.log("Enter a valid amount");
    }
  },

  withdraw: function(amount) {
    if(amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log("Withdrawn Rs." + amount + ". Remaining balance: Rs." + this.balance);
    } else if(amount > this.balance) {
      console.log("Insufficient balance!");
    } else {
      console.log("Enter a valid amount");
    }
  }
};

console.log("Initial balance:", bankAccount.balance);

bankAccount.deposit(2000);  
bankAccount.withdraw(1000);  
bankAccount.withdraw(7000);  

