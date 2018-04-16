/*
page:258
Suppose we want to implement a function to reverse a string. A solution could be transforming the string into an array by
using .split(), then reversing that array, and finally using .join() to make it whole again:
* */
const reverstString = str => {
    let arr = str.split("");
    arr.reverse();
    return arr.join("");
}
console.log(reverstString("abcdefg"));

const reverstString2 = str => {
    // str.split.reduceRight((x + y) => x + y , "");
    return str.split("").reduceRight((x, y) => x + y, "");
};
const reverstString3 = str => {
    // str.split.reduceRight((x + y) => x + y , "");
    return str.split("").reduceRight((x, y) => y + x, "");
};
console.log(reverstString2("abcdefg"));
console.log(reverstString3("abcdefg"));