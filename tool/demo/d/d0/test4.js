// Use Case: Parse the array and return an object that
// contains the number of times each string occured in the array

// without:reduce()
var arr = ["apple", "orange", "apple", "orange", "pear", "orange"];

function getWorkCnt() {
    var obj = {};
    for (var i = 0, l = arr.length; i < l; i++) {
        var item = arr[i];
        obj[item] = (obj[item] + 1) || 1;
    }
    return obj;
}

// console.log(getWorkCnt());
// console.log("=============================");

// with:reduce()
function getWorkCnt1() {
    return arr.reduce(function (prev, next) {
        prev[next] = (prev[next] + 1 || 1);
        return prev;
    }, {})
}

// console.log(getWorkCnt1());

/*Allow me to explain reduce() in my own understanding. reduce(callback,initialValue) takes in two parameters, callback function and initialValue. The callback function itself takes in 4 parameters, prev and next, index and array. You just need to know prev and next.

prev refers to the first item in the array while next refers to the second item. But take note that if you pass in a initialValue, that prev will take on that initialValue and next will be the first value of the array.*/

/*
* Difference between not passing any parameters
* and passing in a additional parameter into `reduce()`
*/
// console.log("=============================");
var arr = ["apple", "orange"];

function noPassValue() {
    return arr.reduce(function (prev, next) {
        console.log("prev:", prev);
        console.log("next:", next);
        return prev + " " + next;
    });
}

function passValue() {
    return arr.reduce(function (prev, next) {
        console.log("prev:", prev);
        console.log("next:", next);

        prev[next] = 1;
        return prev;
    }, {});
}

// console.log("No Additional parameter:", noPassValue());
// console.log("----------------");
// console.log("With {} as an additional parameter:", passValue());

//
var arr = ["apple", "orange", "apple", "pear"];

function getWordCnt2() {
    return arr.reduce(function (prev, next, index) {
        console.log("<b>Iteration " + index + "</b>");
        console.log("prev:", prev);
        console.log("next:", next);

        prev[next] = ++prev[next] || 1;
        console.log("Passing this to the 'prev' of the next iteration if any:", prev);
        console.log("---------------");
        return prev;
    }, {});
}

// console.log("getWordCnt2:");
// console.log("<b>Final Object:</b>", getWordCnt2());

// demethodizing
/*These aforementioned methods are only available to Array but they do come in handy for Nodelist, jQuery Objects and even String. To expose these Array methods, we can use this technique call "demethodizing".*/
// Demethodizing the Array method, forEach(),  into a generic "each"
var each = Function.prototype.call.bind([].forEach);
var nodeList = document.querySelectorAll("p");

each(nodeList,bold);
function bold(node) {
    node.style.fontWeight = "bold";
}