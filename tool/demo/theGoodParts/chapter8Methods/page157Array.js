// Chapter 8. Methods

console.log("-------------------------------------------------- array.concat(item...)");
var a = ['a', 'b', 'c', 'd'];
var b = ['x', 'y', 'z'];
var c = a.concat(b, true);
console.log("c:" + c);

console.log("-------------------------------------------------- array.join(separator)");
var a1 = ['a', 'b', 'c', 'd'];
a1.push('e');
console.log("a1:" + a1);
var b1 = a1.join('');
console.log("b1:" + b1);

console.log("-------------------------------------------------- array.pop()");
var a2 = ['a', 'b', 'c', 'd'];
var b2 = a2.pop();
console.log("a2:" + a2);
console.log("b2:" + b2);

console.log("-------------------------------------------------- array.push(item...)");
var a3 = ['a', 'b', 'c', 'd'];
var b3 = ['x', 'y', 'z'];
var c3 = a3.push(b3, true);
console.log("a3:" + a3);
console.log("array length:" + c3);

console.log("-------------------------------------------------- array.reverse( )");
var a4 = ['a', 'b', 'c', 'd'];
var b4 = a4.reverse();
console.log("b4:" + b4);

console.log("-------------------------------------------------- array.shift( )");
var a5 = ['a', 'b', 'c', 'd'];
var b5 = a5.shift();
console.log("a5:" + a5);
console.log("b5:" + b5);

console.log("-------------------------------------------------- array.slice(start, end )");
var a6 = ['a', 'b', 'c', 'd'];
var b6 = a6.slice(0, 1);
var c6 = a6.slice(20); // empty array
var d6 = a6.slice(1, 3);
console.log("b6:" + b6);
console.log("c6:" + c6);
console.log("d6:" + d6);

console.log("-------------------------------------------------- array.sort(comparefn )");
var n = [4, 8, 15, 16, 23, 42];
var m = [4, 8, 15, 16, 23, 42];
n.sort();
console.log("n:" + n);

// Fortunately, you may replace the comparison function with your own. Your comparison
// function should take two parameters and return 0 if the two parameters are equal, a negative
// number if the first parameter should come first, and a positive number if the second parameter
// should come first. (Old-timers might be reminded of the FORTRAN II arithmetic IF
// statement.)
m.sort(function (a, b) {
    return a - b;
});
console.log("m:" + m);

// That function will sort numbers, but it doesn't sort strings. If we want to be able to sort any
// array of simple values, we must work harder:
var m0 = ['aa', 'bb', 'a', 4, 8, 15, 16, 23, 42];
m0.sort(function (a, b) {
    if (a === b) {
        return 0;
    }
    if (typeof a === typeof b) {
        return a < b ? -1 : 1;
    }
    return typeof a < typeof b ? -1 : 1;
});
console.log("m0:" + m0);

// Function by takes a member name string and returns
// a comparison function that can be used to sort an
// array of objects that contain that member.
var by = function (name) {
    return function (o, p) {
        var a, b;
        if (typeof o === 'object' && typeof p === 'object' && o && p) {
            a = o[name];
            b = p[name];
            if (a === b) {
                return 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        } else {
            throw {
                name: 'Error',
                message: 'Expected an object when sorting by ' + name
            }
        }
    };
};
var s = [
    {first: 'Joe', last: 'Besser'},
    {first: 'Joe', last: 'Aesser'},
    {first: 'Moe', last: 'Howard'},
    {first: 'Joe', last: 'Cesser'},
    {first: 'Joe', last: 'DeRita'},
    {first: 'Shemp', last: 'Howard'},
    {first: 'Larry', last: 'Fine'},
    {first: 'Curly', last: 'Howard'}
];
s.sort(by('first')).sort(by('last'));
// s.sort(by('first'));

var stringify = JSON.stringify(s);
console.log(stringify);

// Function by takes a member name string and an
// optional minor comparison function and returns
// a comparison function that can be used to sort an
// array of objects that contain that member. The
// minor comparison function is used to break ties
// when the o[name] and p[name] are equal.
var by0 = function (name, minor) {
    return function (o, p) {
        var a, b;
        if (o && p && typeof o && typeof p) {
            a = o[name];
            b = p[name];
            if (a === b) {
                return typeof minor === 'function' ? minor(o, p) : 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        }
    };
};
var s0 = [
    {first: 'Joe', last: 'Besser'},
    {first: 'Joe', last: 'Aesser'},
    {first: 'Moe', last: 'Howard'},
    {first: 'Joe', last: 'Cesser'},
    {first: 'Joe', last: 'DeRita'},
    {first: 'Shemp', last: 'Howard'},
    {first: 'Larry', last: 'Fine'},
    {first: 'Curly', last: 'Howard'}
];
var v0 = s0.sort(by0('last', by0('first')));
var stringify2 = JSON.stringify(v0);
console.log("stringify2:" + stringify2);

console.log("-------------------------------------------------- array.splice(start, deleteCount, item...)");
var a7 = ['a', 'b', 'c', 'd'];
var b7 = a7.splice(1, 1, 'ache', 'bug');
console.log("a7:" + a7);
console.log("b7:" + b7);

console.log("-------------------------------------------------- array.unshift(item...)");
var a8 = ['a', 'b', 'c', 'd'];
var b8 = a8.unshift('?','@');
console.log("a8:" + a8);
console.log("b8:" + b8);