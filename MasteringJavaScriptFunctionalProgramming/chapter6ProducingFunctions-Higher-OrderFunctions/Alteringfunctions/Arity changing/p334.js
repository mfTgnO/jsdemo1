// because of the unexpected arity of that function,which took more than one argument:
console.log(["123.45", "-1.33", "34"].map(parseInt));
// unary function
const unary = fn => (...args) => fn(args[0]);
console.log(["123.45", "-1.33", "34"].map(unary(parseInt)));