console.log("-------------------------------------------------- number.toExponential(fractionDigits )");
document.writeln("-------------------------------------------------- number.toExponential(fractionDigits )" + "<br>");
// The toExponential method converts this number to a string in the exponential form.
// The optional fractionDigits parameter controls the number of decimal places. It should
// be between 0 and 20:
document.writeln("Math.PI.toExponential(0):" + Math.PI.toExponential(0) + "<br>");
document.writeln("Math.PI.toExponential(2):" + Math.PI.toExponential(2) + "<br>");
document.writeln("Math.PI.toExponential(7):" + Math.PI.toExponential(7) + "<br>");
document.writeln("Math.PI.toExponential(16):" + Math.PI.toExponential(16) + "<br>");


console.log("-------------------------------------------------- number.toFixed(fractionDigits )");
document.writeln("-------------------------------------------------- number.toFixed(fractionDigits )" + "<br>");
// The toFixed method converts this number to a string in the decimal form. The optional
// fractionDigits parameter controls the number of decimal places. It should be between 0
// and 20. The default is 0:
document.writeln("Math.PI.toFixed(0):" + Math.PI.toFixed(0) + "<br>");
document.writeln("Math.PI.toFixed(2):" + Math.PI.toFixed(2) + "<br>");
document.writeln("Math.PI.toFixed(7):" + Math.PI.toFixed(7) + "<br>");
document.writeln("Math.PI.toFixed(16):" + Math.PI.toFixed(16) + "<br>");

console.log("-------------------------------------------------- number.toPrecision(precision )");
document.writeln("-------------------------------------------------- number.toPrecision(precision )" + "<br>");
// The toPrecision method converts this number to a string in the decimal form. The
// optional precision parameter controls the number of digits of precision. It should be
// between 1 and 21:
document.writeln("Math.PI.toPrecision():" + Math.PI.toPrecision() + "<br>");
document.writeln("Math.PI.toPrecision(2):" + Math.PI.toPrecision(2) + "<br>");
document.writeln("Math.PI.toPrecision(7):" + Math.PI.toPrecision(7) + "<br>");
document.writeln("Math.PI.toPrecision(16):" + Math.PI.toPrecision(16) + "<br>");

console.log("-------------------------------------------------- number.toString(radix )");
document.writeln("-------------------------------------------------- number.toString(radix )" + "<br>");
// The toString method converts this number to a string. The optional radix parameter
// controls radix, or base. It should be between 2 and 36. The default radix is base 10. The
// radix parameter is most commonly used with integers, but it can be used on any number.
// 8 8The most common case, number .toString( ), can be written more simply as
// String( number ):
document.writeln("Math.PI.toString():" + Math.PI.toString() + "<br>");// default parameter is 10
document.writeln("Math.PI.toString(2):" + Math.PI.toString(2) + "<br>");
document.writeln("Math.PI.toString(8):" + Math.PI.toString(8) + "<br>");
document.writeln("Math.PI.toString(16):" + Math.PI.toString(16) + "<br>");