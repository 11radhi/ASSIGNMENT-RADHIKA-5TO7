// Define a multidimensional array

let multidimensionalarray=`a multidimensional array is defined as an array of arrays, 
meaning an array that contains one or more other arrays as its elements.`;

console.log(multidimensionalarray);


// Create a 2D array with 3 rows

const rows = 3;
const columns = 4;
let twoDArray = [];

for (let i = 0; i < rows; i++) {
    twoDArray[i] = []; 
    for (let j = 0; j < columns; j++) {
        twoDArray[i][j] = 0; 
    }
}

console.log(twoDArray);

// Access the 2nd row, 1st column value

let arr=[
    [12,14,15],[34,67,44],[22,38,62]
];

let value= arr[1][0];
console.log(value);


// Print all values using nested loops

let nestedarray=[
    [1,2,3],[4,5,6],[7,8,9]
];

for(let i=1; i < nestedarray.length;i++){
    for(let j=1; j < nestedarray[i].length;j++){
        console.log("Value at index [" + i + "][" + j + "]: " + nestedarray[i][j]);
    }
}

// Explain real-life example of 2D array

let example=`A common real-life example of a 2D arrayis representing a game board, 
such as a chessboard or a Tic-Tac-Toe grid,
where each element stores the state of a specific cell.`;

console.log(example);
