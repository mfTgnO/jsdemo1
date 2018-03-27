// page:324
// https://community.risingstack.com/the-worlds-fastest-javascript-memoization-library/
const memoize2 = fn => {
    if (fn.length === 1) {
        let cache = {};
        return x => (x in cache ? cache[x] : (cache[x] = fn(x)));
    } else {
        return fn;
    }
};

const memoize3 = fn => {
    let cache = {};
    const PRIMITIVES = ["number", "string", "boolean"];
    return (...args) => {
        let strX = args.length === 1 && PRIMITIVES.includes(typeof args[0])
            ? args[0]
            : JSON.stringify(args);
        return strX in cache ? cache[strX] : (cache[strX] = fn(...args));
    };
};

const memoize4 = fn => {
    let cache = {};
    return (...args) => {
        let strX = JSON.stringify(args);
        return strX in cache ? cache[strX] : (cache[strX] = fn(...args));
    };
};

let a = [1, 5, 3, 8, 7, 4, 6];
console.log(String(a));
console.log(JSON.stringify(a));
console.log();

let b = [[1, 5], [3, 8, 7, 4, 6]];
console.log(String(b));
console.log(JSON.stringify(b));
console.log();

let c = [[1, 5, 3], [8, 7, 4, 6]];
console.log(String(c));
console.log(JSON.stringify(c));
console.log();

let d = {a: "fk"};
console.log(String(d));
console.log(JSON.stringify(d));
console.log();

let e = [{p: 1, q: 3}, {p: 2, q: 6}];
console.log(String(e));
console.log(JSON.stringify(e));