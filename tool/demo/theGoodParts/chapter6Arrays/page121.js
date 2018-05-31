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
var numbers_1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
var i;
for (i = 0; i < numbers_1.length; i += 1) {
    document.writeln(numbers_1[i]);
}

// 6.5. Confusion
var is_array = function (value) {
    return value && typeof value === 'object' && value.constructor === Array;
};

var is_array0 = function (value) {
    return value &&
        typeof value === 'object' &&
        typeof value.length === 'number' &&
        typeof value.splice === 'function' &&
        !(value.propertyIsEnumerable('length'));
};

// 6.6. Methods
Array.method('reduce', function (f, value) {
    var i;
    for (i = 0; i < this.length(); i += 1) {
        value = f(this[i], value);
    }
    return value;
});
/*Array.prototype('reduce', function (f, value) {
    var i;
    for (i = 0; i < this.length(); i += 1) {
        value = f(this[i], value);
    }
    return value;
});*/

// create an array of numbers.
var data = [4, 8, 15, 16, 23, 42];
// Define two simple functions. One will add two
// numbers. The other will multiply two numbers.
var add = function (a, b) {
    return a + b;
};
var mult = function (a, b) {
    return a * b;
};

// Invoke the data's reduce method, passing in the
// add function.
var sum = data.reduce(add, 0);// sum is 108
console.log("sum:" + sum);
// Invoke the reduce method again, this time passing
// in the multiply function.
var product = data.reduce(mult, 1);// product is 7418880
console.log("product:" + product);

// Because an array is really an object, we can add methods directly to an individual array:
// Give the data array a total function.
data.total = function () {
    return this.reduce(add, 0);
};
total = data.total();

/*
Since the string 'total' is not an integer, adding a total property to an array does not change its length.
Arrays are most useful when the property names are integers, but they are still objects, and objects can accept
any string as a property name.
It is not useful to use the Object.beget method from Chapter 3 on arrays because it produces an object,
not an array. The object produced will inherit the array's values and methods, but it will not have the special
length property.*/
