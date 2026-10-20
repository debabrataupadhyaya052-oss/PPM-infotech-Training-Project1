// question No-1
// const x = 5;
// const y = "5";

// console.log(x == y && x !== y);
// console.log(x === y || x == y);
// console.log(!(x <= 5));

// question No-2
// const name = "";
// const defaultName = "Guest";

// console.log(name || defaultName);
// console.log(name && defaultName);

// let score = 0;
// score ||= 10; 
// console.log(score);

// question No-3
// const user = { profile: { age: 20 } };
// const guest = null;

// const status1 = user?.profile?.age >= 18 ? "Adult" : "Minor";
// console.log(status1);

// const status2 = guest?.profile?.age >= 18 ? "Adult" : "Minor";
// console.log(status2);

// question No-4
// 1-Falsy Value Cleaner
// Write a condition that checks if a variable input holds a value that is considered falsy in JavaScript(e.g., false, 0, "", null, undefined, NaN).If it is falsy, set a status variable to "Invalid Input"; otherwise, set it to "Valid Input".
// const input = 0;
// let status;

// if (!input) {
//     status = "Invalid Input";
// } else {
//     status = "Valid Input";
// }
// console.log(status);

// 2-Discount Eligibility (Multiple Conditions)Write a program using if, else if, and else that takes age and isMember (boolean).If the person is a member and under 12 or over 65, they get a "Free Entry".If they are a member but don't fit the age brackets, they get a "20% Discount".If they are not a member, they pay "Full Price".
// let age = 30;
// let isMember = true;

// if(isMember && (age<12 || age>65)){
//     console.log("They Got Free Entry");
// }else if(isMember && !(age<12 || age>65) ){
//     console.log("They Got 20% Discount");
// }else{
//     console.log("Please give full pament");
// }

// let number =4;
// switch(number){
//     case 1:
//         console.log("one");
//         break;
//     case 2:
//         console.log("two"); 
//         break;
//     case 3:
//         console.log("three");
//         break;
//     default:
//         console.log("Invalid number");
// }

// let str="i love coding";
// let newstr= str.slice("5");
// console.log(newstr);
// console.log(str.slice(4,-5));


