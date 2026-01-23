// Create an array of 5 numbers

const numbers=[20,35,78,98,56];

console.log(numbers[2]);


// Add and remove elements using push & pop

const cars =['BWM','BENZ','AUDI'];

cars.push('TATA','FORD','SUZUKI');

console.log(cars);

const removedcar = cars.pop();

console.log(removedcar);

console.log(cars);



// Print array values using forEach

const fruits = ['Dragon fruit','Avacado','Pine apple','Raspberry'];

fruits.forEach(fruits =>{
    console.log('List of fruits');
    console.log(fruits); 
    
})

// Use map to double numbers

const num = [10,50,100,250,600];

const doublednumbers = num.map(num => num * 2);

console.log(num);

console.log(doublednumbers);


// Filter odd numbers from an array

const nummber = [10,45,89,24,53];

const oddnumbers = nummber.filter(nummber => nummber % 2 !==0);

console.log(oddnumbers);
