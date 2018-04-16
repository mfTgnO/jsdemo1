// By the way, back in Chapter 1, Becoming Functional - Several Questions, we saw the equivalence between .apply() and .call() when you used the spread
// operator.
const demethodize1 = fn => (arg0, ...args) => fn.apply(arg0, args);
const demethodize2 = fn => (arg0, ...args) => fn.call(arg0, ...args);
const demethodize3 = fn => (...args) => fn.bind(...args)();

// say you wanted to separate a string into individual letters and turn them into upper case:
const name = "functional";
const result = name.split("").map(x => x.toUpperCase());
console.log("result:" + result);

// However, if we demethodize both .map() and .toUpperCase(), we can simply write the following:
var map = demethodize3(Array.prototype.map);
const toUpperCase = demethodize3(String.prototype.toUpperCase);
const result1 = map(name, toUpperCase);
console.log("result1:" + result1);

// In a similar way, we could convert an array of decimal amounts into properly formatted strings, with thousands of separators and decimal points:
const toLocaleString = demethodize3(Number.prototype.toLocaleString);
const numbers = [2209.6, 124.56, 1048576];
const strings = numbers.map(toLocaleString);
console.log("strings:" + strings);
// Alternatively, given the preceding map function, this would have also worked:
var strings1 = map(numbers, toLocaleString);
console.log("strings1:" + strings1);
