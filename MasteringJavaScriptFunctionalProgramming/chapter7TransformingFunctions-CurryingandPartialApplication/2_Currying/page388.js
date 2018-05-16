const curryByBind = fn => fn.length === 0 ? fn() : p => curryByBind(fn.bind(null, p));

const make3 = (a, b, c) => String(100 * a + 10 * b + c);
/*const f1 = curryByBind(make3);
const f2 = f1(6);
const f3 = f2(5);
const f4 = f3(8);
console.log(f4);
console.log("welcome");

const step1 = make3.bind(null, 6);
const step2 = step1.bind(null, 5);
const step3 = step2.bind(null, 7);
console.log(step3());*/
