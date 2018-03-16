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

// page:256
// Calculating several values at once
/*const average3 = arr => {
    const sc = arr.reduce((ac,val) => ({
        sum:val + ac.sum,count:ac.count+1
    }),{sum:0,count:0});
    return sc.sum / sc.count;
};*/
const average3 = arr => {
    const sc = arr.reduce(
        (ac, val) => ({ sum: val + ac.sum, count: ac.count + 1 }),
        { sum: 0, count: 0 }
    );
    return sc.sum / sc.count;
};
console.log("average3");
console.log(average3(myArray));

// page:256
const average4 = arr => {
    const sc = arr.reduce((ac,val) => [ac[0]+val,ac[1]+1],[0,0]);
    return sc[0]/sc[1];
};
console.log("average4");
console.log(average4(myArray));