const myArray = [22, 9,60, 12, 4, 56];
const sum = (x, y) => x + y;
const mySum = myArray.reduce(sum, 0);

console.log(mySum);