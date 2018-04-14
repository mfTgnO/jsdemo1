// because of the unexpected arity of that function,which took more than one argument:
console.log(["123.45","-1.33","34"].map(parseInt));
// unary function
console.log(["123.45","-1.33","34"].map(unary(parseInt)));