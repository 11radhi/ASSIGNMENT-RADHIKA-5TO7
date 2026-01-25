// Student Marksheet (2D array)

let marks =[
    [85,89,92,87,79],
    [72,78,83,88,71],
    [90,98,99,92,93]
];

console.log(marks[2][1]);

let Total = 0;

for(let i=0; i < marks[0].length; i++){
    Total += marks[0][i];
}

let average = Total / marks[0].length;

console.log('Total:',Total);

console.log('Average:',average);


// Matrix Addition Program

let matrix1=[
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4]
];

let matrix2=[
    [5,6,7,8],
    [5,6,7,8],
    [5,6,7,8]
];

let resultmatx= [];

for(let i=0; i < matrix1.length;i++){
    let r = '';
    for(let j=0;j < matrix1[i].length; j++){
        r += matrix1[i][j] + matrix2[i][j] + " ";
    }
    resultmatx.push(r.trim());
}

console.log('==========================');
console.log('Matrix :');


resultmatx.forEach(r => console.log(r));

// Seating Arrangement Chart

let seats = [null,null,null,null];

seats[1] = 'A';//A in 2nd position
seats[2] = 'B';//B to the right of A
seats[0] = 'C';//C to the left of A
seats[3] = 'D';//Remaining person

console.log('=====================');
console.log('Seating arrangements:');
console.log(seats.join(' | '));


// Game Board Representation

let board = [
    ['-','-','-'],
    ['-','-','-'],
    ['-','-','-']
];

console.log('====================');
    
    console.log('TIC TAC TOE:');

board.forEach(row => {    
    console.log(row.join('|'));    
});

board[1][2]='X';

console.log('After move:');


board.forEach(row => {
    console.log(row.join('|'));
    
})

// Weekly Expense Tracker (2D array)

let weeklyexpenses = {
    Monday : 120,
    Tuesday: 130,
    Wednesday: 140,
    Thursday: 150,
    Friday : 100,
    Saturday: 90,
    Sunday : 170
};

console.log('Weekly Expenses Report:');
for(let day in weeklyexpenses){
    console.log(day + ':' + weeklyexpenses[day]);
    
}

let Totalexp = 0;
let days = 0;

for(let day in weeklyexpenses){
    Totalexp += weeklyexpenses[day];
    days++;
}

console.log("Total expenses: ",Totalexp);

