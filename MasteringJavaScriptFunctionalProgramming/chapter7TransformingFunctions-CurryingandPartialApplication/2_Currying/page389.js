const curryByBind2 = (fn, len = fn.length) => len === 0 ? fn() : p => curryByBind2(fn.bind(null, p), len - 1);
const sum2 = (...args) => args.reduce((x, y) => x + y, 0);
console.log(sum2.length);// 0; curryByBind() wouldn't work
console.log(sum2(1, 5, 3));
console.log(sum2(1, 5, 3, 7));
console.log(sum2(1, 5, 3, 7, 4));

curriedSum5 = curryByBind2(sum2, 5);// curriedSum5 will expect 5 parameters
console.log(curriedSum5(1)(5)(3)(7)(4));// 20
