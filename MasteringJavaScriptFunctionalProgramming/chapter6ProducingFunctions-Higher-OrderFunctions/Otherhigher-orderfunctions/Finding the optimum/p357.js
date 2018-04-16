// For example, in Chapter 5, Programming Declaratively - A Better Style, we had to get latitudes and longitudes to be able to calculate an average:
markers = [
    {name: "UY", lat: -34.9, lon: -56.2},
    {name: "AR", lat: -34.6, lon: -58.4},
    {name: "BR", lat: -15.8, lon: -47.9},
    {name: "BO", lat: -16.5, lon: -68.1}
];

let averageLat = average(markers.map(x => x.lat));
let averageLon = average(markers.map(x => x.lon));

console.log(averageLon);
console.log(averageLat);

// We had another example when we saw how to filter an array; in our example, we wanted to get the IDs for all accounts with a negative balance and, after filtering out all other accounts, we still needed to extract the ID field:
const delinquent = serviceResult.accountsData.filter(v => v.balance < 0);
const delinquentIds = delinquent.map(v => v.id);

// What do we need? We need a higher-order function that will receive the name of an attribute, and produce as its result a new function that will be able to extract said attribute from an object. Using ES8 syntax, this function is easy to write:
const getField = attr => obj => obj[attr];

// with this function,the coordinates extraction could have been written as follows:
let averageLat = average(markers.map(getField("lat")));
let averageLon = average(markers.map(getField("lon")));

// for variety,we could have used an auxiliary variable to get the delinquent ID's.
const getId = getField("id");
const delinquent = serviceResult.accountsData.filter(v => v.balance < 0);
const delinquentIds = delinquent.map(getId);