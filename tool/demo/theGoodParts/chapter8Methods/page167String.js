console.log("-------------------------------------------------- string.charAt(pos )");
// document.writeln("-------------------------------------------------- string.charAt(pos )" + "<br>");

// The charAt method returns the character at position pos in this string . If pos is less
// than zero or greater than or equal to string .length, it returns the empty string.
// JavaScript does not have a character type. The result of this method is a string:
var name = 'Curly';
var charAt0 = name.charAt(0);
var charAt3 = name.charAt(3);
var charAt100 = name.charAt(100);
console.log("charAt0:" + charAt0);
console.log("charAt3:" + charAt3);
console.log("charAt100:" + charAt100);

console.log("-------------------------------------------------- string.charCodeAt(pos )");
// The charCodeAt method is the same as charAt except that instead of returning a string, it
// returns an integer representation of the code point value of the character at position pos in
// that string . If pos is less than zero or greater than or equal to string .length, it
// returns NaN:
var name1 = 'Curly';
var charCodeAt0 = name.charCodeAt(0);
var charCodeAt4 = name.charCodeAt(4);
console.log("charCodeAt0:" + charCodeAt0);
console.log("charCodeAt4:" + charCodeAt4);

console.log("-------------------------------------------------- string.concat(string...)");
// The concat method makes a new string by concatenating other strings together. It is rarely
// used because the + operator is more convenient:
var s = 'C'.concat('a', 't');
console.log("s:" + s);

console.log("-------------------------------------------------- string.indexOf(searchString, position )");
// The indexOf method searches for a searchString within a string. If it is found, it
// returns the position of the first matched character; otherwise, it returns -1. The optional
// position parameter causes the search to begin at some specified position in the string:
var text = 'Mississippi';
var p0 = text.indexOf('ss');
var p1 = text.indexOf('ss', 3);
var p2 = text.indexOf('ss', 6);
console.log("p0:" + p0);
console.log("p1:" + p1);
console.log("p2:" + p2);