// let nameElement = document.getElementsByClassName("name");
// console.dir(nameElement);
// nameElement[0].innerHTML = "PPM-Infotech";
// console.log(nameElement);

// // Array Copying
// const originalArray = [1, 2, 3];
// const copyArray = [...originalArray];

// // Object Copying
// const originalObj = { name: 'Alice', age: 25 };
// const copyObj = {...originalObj };

// Merging Arrays
// const compliance = ['KYC', 'AML'];
// const risk = ['Credit', 'Market'];
// const checklist = [...compliance, ...risk];
// // Result: ['KYC', 'AML', 'Credit', 'Market']

// // Merging Objects
// const user = { id: 101, role: 'guest' };
// const updates = { role: 'admin', active: true };
// const updatedUser = {...user, ...updates };
// // Result: { id: 101, role: 'admin', active: true }

// 2. Selecting elements with querySelector()
/*querySelector() accepts any CSS selector and returns the first matching element.*/

// <
// h1 id = "titile" > Hello World! < /h1>
// 1 >

//     <
//     script >

//     const handing = document.querySelector("#titile");
// console.log(heading);
// console.log(heading.textContent);

// <
// script >

// let title = document.getElementById("title");
// console.dir(title);
// title.innerText = "Welcome to DOM 1";
// console.log(title.baseURI);

// let list = document.getElementbyId("List");
// let newItem = document.createEleement("li");
// newItem.textContent = "newItem"
// let newItem = ["Item1", "Item2"];
// newItem = newItem.forRach((element, Item) = {
//     consloe.log()
// })

const p = document.createElement("p");

p.textContent = 'My name is "Debabrata"';

const text = ["From Bhubaneswar"];

p.append(document.createElement("br"), ...text);

document.body.append(p);