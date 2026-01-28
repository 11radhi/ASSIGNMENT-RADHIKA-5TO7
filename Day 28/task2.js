// Safe Calculator using try...catch

function safecalculator (a,b, operator){
    try{
        let result;
        if(typeof a !== "number" || typeof b !== "number"){
            throw "Inputs must be numbers";
        }

        switch(operator){
            case "+":
                result = a+ b;
                break;
                case "-":
                result = a-b;
                break;
                case "*":
                result = a*b;
                break;
                case "/":
                    if(b === 0){
                        throw "Division by zero not allowed"
                    }
                    result = a/b;
                    break;
                    default:
                        throw "Invalid operator";

        }
        console.log("Result:",result);
        
    }
    catch(error){
        console.log("Error:",error);
        
    }
}

safecalculator(10,5,"+");



// JSON Parser with error handling

function JSONparse(jsonString){
    try{
        return JSON.parse(jsonString);
    }catch (e){
        return null;
    }
}
const data=JSONparse('{"name":"Radhika"}');

if(data){
    console.log(data.name);
    
}else{
    console.log("JSON is not valid");
    
}
// Login Validation with error messages

function validate(email,password){
    try{
        if(!email)throw "Email is missing";
        if(!password)throw "Password is missing";
        if(password.length < 6)throw "Password must be atleast 6 characters";
        return "Login validation success";
    }catch(error){
        return error;
    }
}

console.log(validate("radhika@mail.com","1234567"));


// Debug a broken JavaScript program

//broken code
function calculateTotal(price,quantity){
    total = price * quantity;
    return total;
}
console.log(calculateTotal(200));

//fixed and clean code
function calTotal(price,quantity){
    if(quantity === undefined){
        return "Quantity is missing";
    }
    let total = price * quantity;
    return total
}
console.log(calTotal(200,5));


// Custom error message display

function validateAge(age){
    if(!age){
        return "Age is required";
    }
    if(age < 18){
        return "you must be 18 or above";
    }
    return "Age is valid";
}

console.log(validateAge(16));
