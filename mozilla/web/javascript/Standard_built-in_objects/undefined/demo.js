// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
// JavaScript Demo: Standard built-in objects - undefined
function test(t) {
    if (t === undefined) {
        return "Undefined value!";
    }
    return t;
}

var x;
console.log(test(x));
// expected output: "Undefined value!"

console.log("-------------------------------------------------- another example");
// DON'T DO THIS

// logs "foo string"
(function () {
    var undefined = 'foo';
    console.log(undefined, typeof undefined);
})();

console.log("-------------------------------------------------- another example");
// logs "foo string"
(function (undefined) {
    console.log(undefined, typeof undefined);
})('foo');

for (let i = 0; i < 20; i++) {
    console.log(i);
}