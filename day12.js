///Pratice Question answer///
/*===Loop Functions===*/

/*For Loop */

// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// /*While Loop */

// let i=2;
// while(i<=20){
//     console.log(i);
//     i+=2;
// }

// /*function called greet */

// function greet(name){
//     return "Hello," +name+"!";
// }
// console.log(greet("Debabrata"));

// /*addition of two numbers*/

// function add(a,b){
//     return a+b;
// }
// console.log(add(5,2));

// /*PrintNumber */

// function printNumber(n){
//     for(let i=1; i<=n; i++){
//         console.log(i);
//     }
// }
// printNumber(10);

/*sumnumber*/

// function sumNumbers(n){
//     let sum = 0;
//     for(let i=1; i<n; i++){
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumNumbers(5));

/*For...of loop */

// let fruits = ["apple", "banana", "orange"];
// for(let fruit of fruits){
//     console.log(fruit);
// }

/*find Even Numbers */
// function findEvenNumbers(numbers){
//     let evenNumbers = [];
//     for(let num of numbers){
//         if(num % 2 === 0){
//             evenNumbers.push(num);
//         }
//     }
//     return evenNumbers;
// }
// console.log(findEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Output: [2, 4, 6, 8, 10]   

/*Factorial NUMBER */

// function factorial(n){
//     let result = 1;
//     for(let i=1; i<=n; i++){
//         result *= i;
//     }
//     return result;
// }
// console.log(factorial(20)); // Output: 120

/*CountVowels */

// function countVowels(word) {
//     let count = 0;
//     let vowels = "aeiou";

//     for (let char of word.toLowerCase()) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowels("JavaScript"));

/*===Array Functions===*/

/*color array*/

// let colors = ["red", "green", "blue", "yellow"];
// console.log(colors[1]); // Output: green

/*getFIRSTiTEAM */

// function getFirstItem(arr) {
//     return arr[0];
// }
// console.log(getFirstItem(["apple", "banana", "orange"])); // Output: apple

/*Array Length */

// function getArrayLength(arr) {
//     return arr.length;
// }   
// console.log(getArrayLength(["apple", "banana", "orange"])); // Output: 3

/*function additeam(arr,item) */

// function addItem(arr, item) {
//     arr.push(item);
//     return arr;
// }   
// console.log(addItem(["apple", "banana", "orange"], "grape")); // Output: ["apple", "banana", "orange", "grape"]

/*function removeItem(arr) */

// function removeItem(arr) {
//     return arr.pop();
// }
// console.log(removeItem(["apple", "banana", "orange"])); // Output: ["apple", "banana"]

/*forEach array */

// let fruits = ["Apple", "Banana", "Mango", "Orange"];

// fruits.forEach(function (fruit) {
//     console.log(fruit);
// });

/*Every nubmer is double */

// let numbers = [1, 2, 3, 4, 5];
// let doubledNumbers = numbers.map(function (num) {
//     return num * 2;
// });
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

/*function getEvenNumbers */

// function getEvenNumbers(numbers) {
//     let evenNumbers = [];

//     for (let num of numbers) {
//         if (num % 2 === 0) {
//             evenNumbers.push(num);
//         }
//     }
//     return evenNumbers;
// }
// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));

/*if an item exists in an array */

function findItem(arr, item) {
    return arr.includes(item);
}
console.log(findItem(["Apple", "Banana", "Mango"], "Banana"));
console.log(findItem(["Apple", "Banana", "Mango"], "Orange"));

/*Calculate the sum of all numbers in an array */

function totalPrice(prices) {
    let total = 0;
    for (let price of prices) {
        total += price;
    }
    return total;
}
console.log(totalPrice([100, 200, 300, 400]));