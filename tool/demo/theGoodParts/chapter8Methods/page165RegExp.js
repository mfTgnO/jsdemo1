console.log("-------------------------------------------------- regexp.exec(string )");
// document.writeln("-------------------------------------------------- regexp.exec(string )" + "<br>");

// Break a simple html text into tags and texts.
// (See string.replace for the entityify method.)
// For each tag or text, produce an array containing
// [0] The full matched tag or text
// [1] The tag name
// [2] The /, if there is one
// [3] The attributes, if any

var text = '<html><body bgcolor=linen><p>This is <b>bold<\/b>!<\/p><\/body><\/html>';
var tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;
var a, i;

/*while ((a = tags.exec(text))) {
    for (i = 0; i < a.length; i += 1) {
        // document.writeln('// [' + i + ']' + a[i].entityify());
        console.log('// [' + i + ']' + a[i].entityify());
    }
    // document.writeln();
    console.log();
}*/

console.log("-------------------------------------------------- regexp.test(string )");
// document.writeln("-------------------------------------------------- regexp.test(string )" + "<br>");
// The test method is the simplest (and fastest) of the methods that use regular expressions. If
// the regexp matches the string, it returns true ; otherwise, it returns false. Do not use
// the g flag with this method:
var b = /&.+;/.test('frank &amp;beans');
console.log("b:" + b);

RegExp.method('test', function (string) {
    return this.exec(string) !== null;
});
var test = RegExp.test('adsfa');
console.log("test:" + test);