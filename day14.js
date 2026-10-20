// const number=[10,20,30];
// const[a,b,c,d=40]=number;
// console.log(a,b,c,d);

// const[x="Default",y="Default"]=[null, undefined];
// console.log(x,y);

function sumAll(...numbers) {

  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10
