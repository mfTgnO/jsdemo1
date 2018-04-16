const factorialByRange = n => range(1,n+1).reduce((x,y)=>x*y,1);
console.log(factorialByRange(6));
console.log(factorialByRange(5));
console.log(factorialByRange(3));
console.log(factorialByRange(0));