//MEthod Of loop/////
// const calculator={
//     add:function(a,b){
//         return a+b;
//     },
//     sub:function(a,b){
//          return a-b;
//     },
//     mul:function(a,b){
//         return a*b;
//     },
//     modle:function (a,b){
//         return a%b;
//     },
// }

// console.log("Addition:", calculator.add(10, 5));
// console.log("Subtraction:", calculator.sub(10, 5));

// console.log(calculator);

// const student = {
//     name: "Rahul",
//     age: 20,

//     show: function() {
//         console.log(this.name);
//         console.log(this.age);
//     }
// };

// student.show();

// try {
//     let result = 10 / 0;
//     console.log(result);

//     console.log(name);
// } catch (error) {
//     console.log("An error occurred!");
// }

let number = [6, 7, 8, 10, 20, 15, 18];

let find = 15;

for (let i = 0; i < number.length; i++) {
    if (number[i] === find) {
        console.log("Number found:", number[i]);
    }
}