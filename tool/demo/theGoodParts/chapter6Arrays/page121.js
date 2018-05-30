// 6.1. Array Literals
var empty = [];
var number = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

console.log("empty[1]:" + empty[1]); // undefined
console.log("number[1]:" + number[1]);// undefined

console.log("empty.length:" + empty.length);
console.log("number.length:" + number.length);

// The object literal:
var numbers_object = {
    '0': 'zero', '1': 'one', '2': 'two',
    '3': 'three', '4': 'four', '5': 'five',
    '6': 'six', '7': 'seven', '8': 'eight',
    '9': 'nine'
};

// numbers inherits from Array.prototype
// number_object inherits from Object.prototype

// Also, numbers gets the mysterious length property,
// while number_object does not.

// In most languages, the elements of an array are all required to be of the same type. JavaScript allows an array
// to contain any mixture of values:

var misc = [
    'string', 98.6, true, false, null, undefined,
    ['nested', 'array'], {object: true}, NaN,
    Infinity
];

console.log("misc.length:" + misc.length);

// 6.2. Length
console.log("-------------------------------------------------- another example");
var myArray = [];
console.log("myArray.length:" + myArray.length); // 0
myArray[100000] = true;
console.log("myArray.length:" + myArray.length); // 0
// myArray contains one property.

console.log("-------------------------------------------------- another example");
var numbers_ = ['zero', 'one', 'two'];
console.log("numbers_:" + numbers_);
numbers_[numbers_.length] = 'shi';
console.log("numbers_:" + numbers_);
numbers_.push('go');
console.log("numbers_:" + numbers_);

// 6.3. Delete
console.log("-------------------------------------------------- another example");
console.log("numbers_:" + numbers_);
delete numbers_[2];
console.log("numbers_:" + numbers_);


// Fortunately, JavaScript arrays have a splice method. It can do surgery on an array, deleting some number
// of elements and replacing them with other elements. The first argument is an ordinal in the array. The second
// argument is the number of elements to delete. Any additional arguments get inserted into the array at that
// point:
var numbers_0 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
numbers_0.splice(2, 2);
console.log("numbers_0:" + numbers_0);

// 6.4. Enumeration
var i;
for (i = 0; i < myArray.length; i += 1) {
    document.writeln(myArray[i]);
}