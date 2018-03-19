const markers = [
    {name: "UY", lat: -34.9, lon: -56.2},
    {name: "AR", lat: -34.6, lon: -58.4},
    {name: "BR", lat: -15.8, lon: -47.9},
    //…
    {name: "BO", lat: -16.5, lon: 68.1}
];
let brazilData = markers.find(v => v.name === "BR");
var indexData = markers.findIndex(v => v.name === "BR");
var indexData2 = markers.findIndex(v => v.name === "BRadsf");
console.log(brazilData);
console.log(indexData);
console.log(indexData2);

// page:285
// A special search case
const arr = [1,2,3,NaN,5];
var result1 = arr.findIndex(x =>x === NaN);
var result2 = arr.findIndex(x => isNaN(x));
console.log("result1:"+result1);
console.log("result2:"+result2);

// page:289
// Higher level predicates - some, every
var r3 = markers.every(v => v.lat < 0 && v.lon < 0);
var r4 = markers.some(v => v.lat < 0 && v.lon < 0);
console.log("r3:"+r3);
console.log("r4:"+r4);