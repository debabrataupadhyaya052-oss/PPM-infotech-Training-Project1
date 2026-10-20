function printBiodata(){
console.log("===My Biodata===");
console.log("Name:Debabrata");
console.log("Age:23");
console.log("Educatiuon:B.tech");
console.log("Profession:Web Developer");
console.log("Hobbies:Cricket, Travelling, Cokking,");
console.log("Skills:Html,css, Javascript, Python");
}
printBiodata();


// function printBiodata(name, age, education, profession) {
//     console.log("===== My Biodata =====");
//     console.log("Name:", name);
//     console.log("Age:", age);
//     console.log("Education:", education);
//     console.log("Profession:", profession);
// }

// printBiodata("Debabrata", 23, "B.Tech", "Web Developer");


// function avg(a,b,c){
//     return(a+b+c)/2;
// }
//     let result=avg(10,20,30);
//     console.log("Avg:", result);

// function greet(name) {
//     return "Hello " + name;
// }

// function processUser(name, callback) {
//     console.log(callback(name));
// }

// processUser("Snehasi", greet);

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(num) {
//     console.log(num);
// });

// let doubled = numbers.map(function(num) {
//     return num * 2;
// });

// let even = numbers.filter(function(num) {
//     return num % 2 === 0;
// });

// let found = numbers.find(function(num) {
//     return num > 3;
// });

// let total = numbers.reduce(function(sum, num) {
//     return sum + num;
// }, 0);

// The Callback Functions (the workers)
// const sum = (a, b) => a + b;
// const multiply = (a, b) => a * b;

// function calculate(num1, num2, operation) {/////Function name/////
//   return operation(num1, num2); /////function call//// 
// }

// console.log(calculate(5, 3, sum)); 
// console.log(calculate(5, 3, multiply)); 

// function checkNumber(number, callback) {
//     return callback(number);
// }

// // Callback function for Even
// function isEven(number) {
//     return number % 2 === 0;
// }

// // Callback function for Odd
// function isOdd(number) {
//     return number % 2 !== 0;
// }

// console.log("10 is Even:", checkNumber(10, isEven));
// console.log("7 is Odd:", checkNumber(7, isOdd));

