const array1 = [1, 2, 3, 4, 5, 6];
const myArray = [22, 9, 60, 12, 4, 56];
const sum = (accumulator, currentValue) => accumulator + currentValue;
// console.log(array1.reduce(sum,0));
console.log(myArray.reduce(sum,0));
// const average = arr => arr.reduce(sum,0) / arr.length;
const average2 = (sum,val,ind,arr) => {
    sum += val;
    return ind = arr.length -1 ? sum / arr.length : sum;
};
// console.log(average(array1));
console.log(myArray.reduce(average2,0)); // 27.166667

//
Array.prototype.average = function () {
    return this.reduce((x,y) => x + y ,0) / this.length;
};
let myAvg = [22, 9, 60, 12, 4, 56].average();
console.log(myAvg); // 27.166667