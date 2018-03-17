const markers = [
    {name: "UY", lat: -34.9, lon: -56.2},
    {name: "AR", lat: -34.6, lon: -58.4},
    {name: "BR", lat: -15.8, lon: -47.9},
    {name: "BO", lat: -16.5, lon: -68.1}
];
let averageLat = average4(markers.map(x => x.lat));
let averageLon = average4(markers.map(x => x.lon));
console.log("averageLat:"+averageLat);
console.log("averageLon:"+averageLon);

let averageLat2 = markers.map(x => x.lat).average();
let averageLon2 = markers.map(x => x.lon).average();
console.log("averageLat2:"+averageLat2);
console.log("averageLon2:"+averageLon2);