var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
var url = "http://www.ora.com:80/goodparts?q#fragment";
var result = parse_url.exec(url);
var names = ['url', 'scheme', 'slash', 'host', 'port', 'path', 'query', 'hash'];
var blanks = '          ';
var i;
for (i = 0; i < names.length; i += 1) {
    // document.writeln(names[i] + ':' + blanks.substring(names[i].length), result[i] + "<br>");
    document.writeln(names[i] + ':' + blanks.substring(names[i].length) + result[i] + "<br>");
}

console.log("-------------------------------------------------- another example");
document.writeln("-------------------------------------------------- another example<br>");
var parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;
var test = function (num) {
    document.writeln(parse_number.test(num) + "<br>");
};
test('1'); // true
test('number'); // false
test('98.6'); // true
test('132.21.86.100'); // false
test('123.45E-67'); // true
test('123.45D-67'); // false