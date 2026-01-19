//Build a grading system using if-else

function grading(percentage) {
    if (percentage >= 90 && percentage <= 100){
        return 'A';
    }else    if (percentage >=80){
        return 'B';
    }else    if (percentage >=70){
        return 'c';
    }else    if (percentage >=60){
        return 'D';
    }else    if (percentage >=50){
        return 'E';
    }else {
             return 'Fail';
    }
         
    
}

console.log('Grade:',grading(45));

console.log('Grade:',grading(95));

console.log('Grade:',grading(66));


//Create a login validation using logical operators
function login(){
    const user = document.getElementById('userName').value;
    const pass = document.getElementById('passWord').value;
    const message = document.getElementById('message');

    const validUser='admin';
    const validPass='admin@123';

    if (user === validUser && pass === validPass){
        message.style.color ='green';
        message.textContent = 'login successfully';

    } else{
        message.style.color = 'red';
        message.textContent = 'Invalid username or password';
    }


}



//Build a simple calculator logic 

function add() {
    let a= Number(document.getElementById('num1').value);
    let b= Number(document.getElementById('num2').value);

    document.getElementById('result').textContent='Result:'+ (a+b);
}

function sub() {
    let a= Number(document.getElementById('num1').value);
    let b= Number(document.getElementById('num2').value);

    document.getElementById('result').textContent='Result:'+ (a-b);
}

function mul() {
    let a= Number(document.getElementById('num1').value);
    let b= Number(document.getElementById('num2').value);

    document.getElementById('result').textContent='Result:'+ (a*b);
}

function div() {
    let a= Number(document.getElementById('num1').value);
    let b= Number(document.getElementById('num2').value);

    if (b === 0){
        document.getElementById('result').textContent= 'cannot divide by zero';
    }else {
            document.getElementById('result').textContent='Result:'+ (a/b);

    }

}

//Create a role based access system using switch 


const userRole = 'admin'; 

function checkAccess(role) {
       console.log(`Checking access for role: ${role}`);

    
    switch (role) {
        case 'admin':
            console.log('Access granted: Full administrative control.');
            break;

        case 'editor':
            console.log('Access granted: Can edit and publish content.');
            break;

        case 'viewer':
            console.log('Access granted: Can only view content.');
            break;

        default:
            console.log('Access denied: Unknown role or insufficient permissions.');
    }
}

checkAccess(userRole);

//Write a discount checker for an e-commerce site

let amount =3000;

if(amount>=2500){
    console.log('Discount of 30%');}
    else
         if(amount>=1500){
        console.log('Discount of 20%');}
        else {
            console.log('Discount of 10%');
            
        }
        
    
    






