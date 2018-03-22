const myMap = (arr,fn) => arr.reduce((x,y) => x.concat(fn(y)),[]);
const myArray = [22, 9, 60, 12, 4, 56];
const dup = x => 2 * x;

console.log(myArray.map(dup));
console.log(myMap(myArray,dup));
console.log(myArray);

const range = (start,stop) => new Array(stop - start).fill(0).map((v,i) => start + i);
const factorial4 = n => {
    let result = 1;
    range(1,n+1).forEach(v => (result *= v));
    return result;
};
console.log(factorial4(5));