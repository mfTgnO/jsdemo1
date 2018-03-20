let t0 = performance.now();
// doSomething();
var n = 0;
var x = 1;
while (n < 30) {
    n++;
    x *= n;
}
let t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");
console.log(t0);
console.log(t1);