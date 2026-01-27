// Define DOM in your own words


 let dom = `when a browser loads an html page it converts it into a tree like structure of objects.
 javascript uses this structure to read  change add or remove html elements.`;

console.log('DOM Means:',dom);




// Add a new list item dynamically

function addItem(){
    const list=document.getElementById('myList');

    const newItem= document.createElement('li');

    newItem.innerHTML='New Item' + (list.children.length + 1);

    list.appendChild(newItem);


}


