const markers = [
    {name: "UY", lat: -34.9, lon: -56.2},
    {name: "AR", lat: -34.6, lon: -58.4},
    {name: "BR", lat: -15.8, lon: -47.9},
    //…
    {name: "BO", lat: -16.5, lon: -68.1}
];
let brazilData = markers.find(v => v.name === "BR");
var indexData = markers.findIndex(v => v.name === "BR");
var indexData2 = markers.findIndex(v => v.name === "BRadsf");
console.log(brazilData);
console.log(indexData);
console.log(indexData2);