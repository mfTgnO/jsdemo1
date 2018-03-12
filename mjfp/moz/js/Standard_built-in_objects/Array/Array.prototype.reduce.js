const array1 = [1, 2, 3, 4, 5, 6];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer));
console.log(array1.reduce(reducer, 5));

// --
const sumAndLog = (x,y) => {
    console.log(`${x}+${y}+${x+y}`);
    return x + y;
};
array1.reduce(sumAndLog,0);