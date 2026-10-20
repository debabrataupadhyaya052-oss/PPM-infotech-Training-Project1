// const calculator = (a, b, operator) => {

//     if (operator === "+") {
//         return a + b;
//     }
//     else if (operator === "-") {
//         return a - b;
//     }
//     else if (operator === "*") {
//         return a * b;
//     }
//     else if (operator === "/") {
//         return a / b;
//     }
//     else if (operator === "%") {
//         return a % b;
//     }
//     else {
//         return "Invalid operator";
//     }
// };

// console.log(calculator(20, 10, ""));



// function calculate() {

//     let num1 = Number(document.getElementById("num1").value);
//     let num2 = Number(document.getElementById("num2").value);
//     let operator = document.getElementById("operator").value;

//     let result;

//     if (operator === "+") {
//         result = num1 + num2;
//     }
//     else if (operator === "-") {
//         result = num1 - num2;
//     }
//     else if (operator === "*") {
//         result = num1 * num2;
//     }
//     else if (operator === "/") {
//         if (num2 === 0) {
//             result = "Cannot divide by zero";
//         } else {
//             result = num1 / num2;
//         }
//     }
//     else if (operator === "%") {
//         result = num1 % num2;
//     }

//     document.getElementById("result").innerText = "Result: " + result;
// }


////*****Lopp Function *****////

// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// for(let i=0; i<=10; i*=2){
//     console.log(i);
// }
// let sum=0;
// for(let i=0; i<=5; i++){
//     sum=sum+i;
//     console.log(sum);
// }

// for (let i=1; i<=5; i++){
//     if(i===3){
//         continue;
// }
// console.log(i);
// }

// let char=['A','B','C','D'];
// for(i=0; i<char.length; i++){
//     console.log(char[i]);
// }


// let chars=['A','B','C','D'];

// for (char of chars) {
//     console.log(chars); 
// }

// let products={
//     name:"laptop",
//     price:20000,
// },
// {
//     name:"Phone",
//     price:30000,
// }

// for(let product of products){
//     let name=product.name;
// console.log(name);
// }

// let stuhdent={
//     name:"Ravi",
//     age:"20",
//     city:"BBSR",
// }
// for(let key in student){
//     console.log(key,":", student[key]);
// }