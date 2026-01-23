// Student Marks Analyzer (array + reduce)

const Students = [
    {name:'Ajith',mark: 89},
    {name:'Santhosh',mark:78},
    {name:'Ravi',mark: 91}
];
const topstudent = Students.reduce((highest, student)=>{
    return (student.mark > highest.mark) ? student:highest;
},Students[0]);

console.log('Top student: ',topstudent.name, 'mark: ', topstudent.mark );

// Even/Odd Number Filter App

const numbers = [23,44,57,68,91];

const oddnumber= numbers.filter(numbers => numbers % 2 !==0);

console.log(oddnumber);

const evennumber = numbers.filter(numbers => numbers % 2 === 0);

console.log(evennumber);

// Product Price Calculator using map

const products = new Map();
products.set('Laptop', { basePrice: 1000, taxRate: 0.05 }); // 5% tax
products.set('Mouse', { basePrice: 25, taxRate: 0.05 });
products.set('Keyboard', { basePrice: 75, taxRate: 0.05 });

console.log(products);

// Search Students Above Certain Marks

const students = [
  { name: "Anil", marks: 85 },
  { name: "Babu", marks: 72 },
  { name: "Chandru", marks: 91 },
  { name: "Dinesh", marks: 65 }
];

const passingThreshold = 75;
const highAchievers = [];

for (let i = 0; i < students.length; i++) {
  if (students[i].marks > passingThreshold) {
    highAchievers.push(students[i]);
  }
}

console.log(highAchievers);

// Shopping Cart Total Calculator

const Cart = [
    {price: 100,qty: 2},
    {price: 150,qty: 4}
];

let Total=0;

for(let item of Cart){
    Total += item.price * item.qty;
}

console.log('Total amount:',Total);




