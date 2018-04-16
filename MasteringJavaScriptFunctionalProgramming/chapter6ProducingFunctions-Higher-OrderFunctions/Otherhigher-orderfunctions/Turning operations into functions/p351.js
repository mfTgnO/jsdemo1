// a handier implementation.
// we will need a function to check if a number if negative.
const isNegative = curry(binaryOp2(">"))(0);

// wo could do better if we defined a binary operation function that also let us specify one of parameter,
// the left one or the right one,in addition to the operator to be used:
const binaryLeftOp = (x, op) => (y) => binaryOp2(op)(x, y);
const binaryRightOp = (op, y) => (x) => binaryOp2(op)(x, y);

// alternatively, you could have gone back to the new Function() style of code:
const binaryLeftOp2 = (x, op) => y => binaryOp2(op)(x, y);
const binaryRightOp2 = (op, y) => x => binaryOp2(op)(x, y);

// test
const isNegative1 = binaryLeftOp(x, ">");
const isNegative2 = binaryRightOp("<", 0);

// of course,for a simple function such as checking whether a number is negative,i would never want to
// complicate things with currying or binary operators or point freestyle or anything else,
// and i'd just write the following with no further ado:
const isNegative3 = x => x < 0;