// summing an array section of chapter 5
const mySum = myArray.reduce((x, y) => x + y, 0);
// working with range,to calculate factorial
const factorialByRange = n => range(1, n + 1).reduce((x, y) => x * y, 1);
// just turn a binary operator into function that calculator the sam result
const mySum_ = myArray.reduce(binaryOp("+"), 0);
const factorialByRange = n => range(1, n + 1).reduce(binaryOp("*"), 1);

// write this binaryOp() function
// first way:require listing each possible
const binaryOp1 = op => {
    switch (op) {
        case "+":
            return (x, y) => x + y;
        case "-":
            return (x, y) => x - y;
        case "*":
            return (x, y) => x * y;
        // etc
    }
}

// second way:more dangerous,using eval() isn't recommended for security reasons!
const binaryOp2 = op => new Function("x", "y", `return x $(op) y;`);