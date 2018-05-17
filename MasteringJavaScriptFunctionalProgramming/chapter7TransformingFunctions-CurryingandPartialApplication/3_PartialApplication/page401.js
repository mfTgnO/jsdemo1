// Partial application with arrow functions
const nonsense = (a, b, c, d, e) => `${a}/${b}/${c}/${d}/${e}`;
const fix2and5 = (a, c, d) => nonsense(a, 22, c, d, 1970);
const fixLast = (a, c) => fix2and5(a, c, 9);