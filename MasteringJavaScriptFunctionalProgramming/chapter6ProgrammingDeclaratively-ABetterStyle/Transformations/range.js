const range = (start,stop) => new Array(stop - start).fill(0).map((v,i) => start + i);
var array = new Array(0);
let from2To6 = range(2,7);
console.log(from2To6);
console.log(array);

const ALPHABET = range("A".charCodeAt(),"Z".charCodeAt()+1).map(x => String.fromCharCode(x));
var A = "A".charCodeAt();
var Z = "Z".charCodeAt();
var a = "a".charCodeAt();
var z = "z".charCodeAt();
console.log("A:"+A);
console.log("Z:"+Z);
console.log("a:"+a);
console.log("z:"+z);
console.log(ALPHABET);