//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
// -------------------------------------------------- example
/*The simplest use of bind() is to make a function that, no matter how it is called, is called with a particular this value. A common mistake for new JavaScript programmers is to extract a method from an object,
then to later call that function and expect it to use the original object as its this (e.g. by using that method in callback-based code). Without special care, however, the original object is usually lost.
Creating a bound function from the function, using the original object, neatly solves this problem:*/
var module = {
    x: 42,
    getX: function () {
        return this.x;
    }
}

var unboundGetX = module.getX;
// console.log(unboundGetX());// The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.bind(module);
// console.log(boundGetX());

// address:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind
// example
this.x = 9;// this refers to global "window" object here in the browser
var module = {
    x: 81,
    getX: function () {
        return this.x;
    }
};
console.log(module.getX());// 81
var retrieveX = module.getX;
console.log(retrieveX());
// returns 9 - The function gets invoked at the global scope

// Create a new function with 'this' bound to module
// New programmers might confuse the
// global var x with module's property x
var boundGetX = retrieveX.bind(module);
console.log(boundGetX());

// -------------------------------------------------- another example
/*The next simplest use of bind() is to make a function with pre-specified initial arguments. These arguments (if any) follow the provided this value and are then inserted at the start of the arguments passed to the
target function, followed by the arguments passed to the bound function, whenever the bound function is called.*/
console.log("-------------------------------------------------- another example");

function list() {
    return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3);// [1, 2, 3]
console.log("list1:" + list1);
// create a function with a preset leading argument
var leadingThirtysevenList = list.bind(null, 37);
var list2 = leadingThirtysevenList();
console.log("list2:" + list2);
// [37]

var list3 = leadingThirtysevenList(1, 2, 3);
console.log("list3:" + list3);
// [37,1,2,3]