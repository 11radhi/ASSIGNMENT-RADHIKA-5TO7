// Student Class with name & marks

class student{
    constructor(name,mark){
        this.name = name;
        this.mark = mark;
    }
    showdetails(){
        return `This shows student details
        name: ${this.name}  
        mark:${this.mark} `;
    }
}

const stu = new student('Mohan','459');

console.log(stu.showdetails());


// Vehicle → Car Inheritance example

class vehicle {
    constructor (brand){
        this.brand = brand;
    }

    start(){
        console.log(this.brand + ' Vehicle is starting');
        
    }
}

class car extends vehicle{
    constructor(brand ,model){
        super(brand);
        this.model = model;
    }
    drive(){
        console.log(this.brand + ' is driving');
        
    }
}

const mycar = new car('toyota','corolla');

mycar.start();

mycar.drive();

// Employee Management System (basic)

class Employee {
  constructor(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
  }

  getDetails() {
    console.log("ID:", this.id);
    console.log("Name:", this.name);
    console.log("Salary:", this.salary);
  }
}

class Manager extends Employee {
  constructor(id, name, salary, department) {
    super(id, name, salary);
    this.department = department;
  }

  getDetails() {
    super.getDetails();
    console.log("Department:", this.department);
  }
}

const emp1 = new Employee(101, "Ravi", 30000);
const mgr1 = new Manager(201, "Anitha", 60000, "HR");

console.log("Employee Details");
emp1.getDetails();

console.log("\nManager Details");
mgr1.getDetails();

// Product List using array of objects

const Bike =[
    {model: 'Hero Honda',price: 25000},
    {model: 'Splender', price: 35000},
    {model: 'Pulsar', price: 45000}
];

console.log(Bike);

console.log(Bike[2].model);

// School System using OOP concepts

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getInfo() {
    console.log("Name:", this.name);
    console.log("Age:", this.age);
  }
}

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  getInfo() {
    super.getInfo();
    console.log("Grade:", this.grade);
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  getInfo() {
    super.getInfo();
    console.log("Subject:", this.subject);
  }
}

const student1 = new Student("Suresh", 15, "10th");
const teacher1 = new Teacher("Mani", 35, "Maths");

console.log("Student Details");
student1.getInfo();

console.log("\nTeacher Details");
teacher1.getInfo();

