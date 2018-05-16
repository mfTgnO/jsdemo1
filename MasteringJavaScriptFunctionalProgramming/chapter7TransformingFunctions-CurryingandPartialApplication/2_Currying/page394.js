const make3 = (a, b, c) => String(100 * a + 10 * b + c);
const make3curried = a => b => c => String(100 * a + 10 * b + c);
const make3curried0 = x1 => x2 => x3 => make3(x1, x2, x3);

const range = (start, stop) => new Array(stop - start).fill(0).map((v, i) => start + i);
const curryByEval = (fn, len = fn.length) => eval(`${range(0, len).map(i => `x${i}`).join("=>")} =>
    ${fn.name}(${range(0, len).map(i => `x${i}`).join(",")})`);
const curryByEval2 = (fn, len = fn.length) =>
    eval(`${range(0, len).map(i => `x${i}`).join("=>")} =>
    (${fn.toString()})(${range(0, len).map(i => `x${i}`).join(",")})`);

const add2 = (x, y) => x + y;
console.log(add2(2, 5));