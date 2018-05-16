// three parameters,is a ternary function,returns a string
const make3 = (a, b, c) => String(100 * a + 10 * b + c);
console.log(make3(1, 2, 3));

// have a sequence of functions,each with a single parameter:
// is unary,return another function -- which ,itself,return a second function
const make3curried = a => b => c => String(100 * a + 10 * b + c);
console.log(make3curried(2)(3)(4));

const make3curried2 = function (a) {
    return function (b) {
        return function (c) {
            return String(100 * a + 10 * b + c);
        };
    };
};

console.log(make3curried2(3)(4)(5));

// Suppose you had a function that calculated the VAT (Value Added Tax) for an amount:
const addVAT = (rate, amount) => amount * (1 + rate / 100);
console.log(addVAT(20, 500));
console.log(addVAT(15, 200));

//
const addVATcurried = rate => amount => amount * (1 + rate / 100);
const addNationVAT = addVATcurried(6);
console.log(addNationVAT(1500));
console.log(addNationVAT(2000));

// currying is basic Scala or Haskell