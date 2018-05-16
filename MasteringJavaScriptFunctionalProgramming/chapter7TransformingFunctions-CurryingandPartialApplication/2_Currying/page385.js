// let result = sum(3,5);



const sum = (x, y) => {
    if (x !== undefined && y !== undefined) {
        return x + y;
    } else if (x !== undefined && y == undefined) {
        return z => sum(x, z);
    } else {
        return sum;
    }
}
console.log(sum(3,5));
sum(3, 5);
const add2 = sum(2);
console.log(add2(3));
console.log(sum(2)(7));
console.log(sum()(10)(7));