// 3.7. Enumeration
var name;
/*for (name in another_stooge) {
    if (typeof another_stooge[name] !== 'function') {
        document.writeln(name + ': ' + another_stooge[name]);
    }
}*/

var i;
var properties = [
    'first-name',
    'middle-name',
    'last-name',
    'profession'
];

/*for (i = 0; i < properties.length; i += 1) {
    document.writeln(properties[i] + ': ' + another_stooge[properties[i]]);
}*/
console.log("-------------------------------------------------- another example");
var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }

};
console.log("flight.airline:" + flight.airline);
delete flight.airline;
console.log("flight.airline:" + flight.airline);