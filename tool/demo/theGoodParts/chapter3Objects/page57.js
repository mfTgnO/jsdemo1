/*
if (typeof Object.beget !== 'function') {
    Object.beget = function (o) {
        var F = function () {
        };
        F.prototype = o;
        return new F();
    };
}
var another_stooge = Object.beget(stooge);

another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';
*/

// 3.6. Reflection
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

console.log("typeof flight.number:" + typeof flight.number);
console.log("typeof flight.status:" + typeof flight.status);
console.log("typeof flight.arrival:" + typeof flight.arrival);
console.log("typeof flight.manifest:" + typeof flight.manifest);

console.log("typeof flight.toString:" + typeof flight.toString); // function
console.log("typeof flight.constructor:" + typeof flight.constructor);// function

console.log(flight.hasOwnProperty("number"));// true
console.log(flight.hasOwnProperty("constructor"));// false