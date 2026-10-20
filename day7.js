// function sum(a,b){
//     let sum=5+2; //7
//     return sum;
// }
// console.log(sum);

// function examole(){
//     consloe.log(First line);
// return="Finsished"
// }
// consloe.log(example());

// function great(name="friend"){
//     console.log("Hello,"+name);
//     }
//     great("Ravi");
//     great();

// conset great=function(name){
//     return"Hello," +name;
// };
// consloe.log(great("Ravi"));

// const double = number => number * 2;

// console.log(double(6));

// const calculatedArea=(length, width) =>{
//     return length * width;
// };
// console.log(calculatedArea(10,20)); //200

// const largest=(a,b,c,d,e)=>
//     return

// const factorial = (number) => {
//     let result = 1;

//     for (let i = 1; i <= number; i++) {
//         result = result * i;
//     }

//     return result;
// };

// console.log(factorial(5));

function calculator(a, b, operator) {

    if (operator === "+") {
        return a + b;
    }
    else if (operator === "-") {
        return a - b;
    }
    else if (operator === "*") {
        return a * b;
    }
    else if (operator === "/") {
        return a / b;
    }
    else if (operator === "%") {
        return a % b;
    }
    else {
        return "Invalid operator";
    }
}

console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "-"));
console.log(calculator(10, 5, "*"));
console.log(calculator(10, 5, "/"));
console.log(calculator(10, 5, "%"));