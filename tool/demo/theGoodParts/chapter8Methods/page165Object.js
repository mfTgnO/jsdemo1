console.log("-------------------------------------------------- object.hasOwnProperty(name )");
// document.writeln("-------------------------------------------------- object.hasOwnProperty(name )" + "<br>");
// The hasOwnProperty method returns true if the object contains a property having the
// name . The prototype chain is not examined. This method is useless if the name is
// hasOwnProperty:
var a = {member: true};
var b = Object.beget(a);
var t = a.hasOwnProperty('member');
var u = b.hasOwnProperty('member');
var v = b.member;

console.log("a:" + a);
console.log("b:" + b);
console.log("t:" + t);
console.log("u:" + u);
console.log("v:" + v);