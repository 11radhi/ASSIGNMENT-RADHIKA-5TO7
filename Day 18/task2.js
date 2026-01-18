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













