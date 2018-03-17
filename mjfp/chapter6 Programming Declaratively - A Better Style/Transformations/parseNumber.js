console.log(["123.45", "67.8", "90"].map(parseFloat));
console.log(["123.45", "-67.8", "90"].map(parseInt));

console.log(["123.45", "67.8", "90"].map(x => parseFloat(x)));
console.log(["123.45", "-67.8", "90"].map(x => parseInt(x)));

