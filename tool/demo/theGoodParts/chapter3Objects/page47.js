/*Object literals provide a very convenient notation for creating new object values. An object literal is a pair of
curly braces surrounding zero or more name/value pairs. An object literal can appear anywhere an expression
can appear:

console.log();
console.log("-------------------------------------------------- another example");
* */

var empty_object = {};
var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};
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

// 3.2. Retrieval
console.log(stooge["first-name"]);// Jerome
console.log(flight.departure.IATA);// SYD

// The undefined value is produced if an attempt is made to retrieve a nonexistent member:
console.log("-------------------------------------------------- another example");
console.log(stooge["middle-name"]);// undefined
console.log(flight.status);// undefined
console.log(stooge["FIRST-NAME"]);// undefined

// The || operator can be used to fill in default values:
console.log("-------------------------------------------------- another example");
var middle = stooge["middle-name"] || "(none)";
var status = flight.status || "unknown";
console.log(middle);// (none)
console.log(status);// unknown

// Attempting to retrieve values from undefined will throw a TypeError exception. This can be guarded against with the && operator:
console.log("-------------------------------------------------- another example");
console.log(flight.equipment);// undefined
// console.log(flight.equipment.model);// throw "TypeError"
console.log(flight.equipment && flight.equipment.model);// undefined

// 3.3. Update
// A value in an object can be updated by assignment. If the property name already exists in the object, the
// property value is replaced:
console.log("-------------------------------------------------- another example");
stooge['first-name'] = 'JeromeEDIT';
console.log(stooge);

// If the object does not already have that property name, the object is augmented:
console.log("-------------------------------------------------- another example");
stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';
flight.equipment = {
    model: 'Boeing 777'
};
flight.status = 'overdue';
console.log(stooge);
console.log(flight);

// 3.4. Reference
// Objects are passed around by reference. They are never copied:
console.log("-------------------------------------------------- another example");
var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;
// nick is 'Curly' because x and stooge
// are references to the same object
var a = {}, b = {}, c = {};
// a, b, and c each refer to a
// different empty object
a = b = c = {};
// a, b, and c all refer to
// the same empty object
console.log(nick);