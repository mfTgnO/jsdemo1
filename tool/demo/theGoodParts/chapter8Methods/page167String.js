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
console.log("p0:" + p0);// p0:2
console.log("p1:" + p1);// p1:5
console.log("p2:" + p2);// p2:-1

console.log("-------------------------------------------------- string.lastIndexOf(searchString, position )");
// The lastIndexOf method is like the indexOf method, except that it searches from the
// end of the string instead of the front:
var text1 = 'Mississippi';
var n0 = text1.lastIndexOf('ss');
var n1 = text1.lastIndexOf('ss', 3);
var n2 = text1.lastIndexOf('ss', 6);
console.log("n0:" + n0);// n0:5
console.log("n1:" + n1);// n1:2
console.log("n2:" + n2);// n2:5

console.log("-------------------------------------------------- string.localeCompare(that )");
// The localCompare method compares two strings. The rules for how the strings are
// compared are not specified. If this string is less than that string, the result is negative. If
// they are equal, the result is zero. This is similar to the convention for the array .sort
// comparison function:
var m = ['AAA', 'A', 'aa', 'a', 'Aa', 'aaa'];
m.sort(function (a, b) {
    console.log(a + "---" + b);
    return a.localeCompare(b);
});
console.log("m:" + m);// m:a,A,aa,Aa,aaa,AAA

console.log("-------------------------------------------------- string.match(regexp )");
var text = '<html><body bgcolor=linen><p>This is <b>bold<\/b>!<\/p><\/body><\/html>';
var tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;
var a, i;
a = text.match(tags);
/*for (i = 0; i < a.length; i += 1) {
    document.writeln(('// [' + i + '] ' + a[i]).entityify());
}*/
// The result is
// [0] <html>
// [1] <body bgcolor=linen>
// [2] <p>
// [3] This is
// [4] <b>
// [5] bold
// [6] </b>
// [7] !
// [8] </p>
// [9] </body>
// [10] </html>


console.log("-------------------------------------------------- string.replace(searchValue, replaceValue )");
// The replace method does a search and replace operation on this string, producing a new
// string. The searchValue argument can be a string or a regular expression object. If it is a
// string, only the first occurrence of the searchValue is replaced, so:
var result = "mother_in_law".replace('_', '-');
console.log("result:" + result);

// will produce "mother-in_law", which might be a disappointment.
// If searchValue is a regular expression and if it has the g flag, then it will replace all
// occurrences. If it does not have the g flag, then it will replace only the first occurrence.
// The replaceValue can be a string or a function. If replaceValue is a string, the
// character $ has special meaning:

// Capture 3 digits within parens
var oldareacode = /\((\d{3})\)/g;
var p = '(555)666-1212'.replace(oldareacode, '$1-');
console.log("p:" + p);

// If the replaceValue is a function, it will be called for each match, and the string returned
// by the function will be used as the replacement text. The first parameter passed to the
// function is the matched text. The second parameter is the text of capture group 1, the next
// parameter is the text of capture group 2, and so on:
/*String.method('entityify', function () {
    var character = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;'
    };
// Return the string.entityify method, which
// returns the result of calling the replace method.
// Its replaceValue function returns the result of
// looking a character up in an object. This use of
// an object usually outperforms switch statements.
    return function () {
        return this.replace(/[<>&"]/g, function (c) {
            return character[c];
        });
    };
});
console.log("<&>".entityify());// &lt;&amp;&gt;*/

console.log("-------------------------------------------------- string.search(regexp )");
// The search method is like the indexOf method, except that it takes a regular expression
// object instead of a string. It returns the position of the first character of the first match, if there
// is one, or -1 if the search fails. The g flag is ignored. There is no position parameter:
var text2 = 'and in it he says "Any damn fool could';
var search0 = text2.search(/["']/);
console.log("search0:" + search0);

console.log("-------------------------------------------------- string.slice(start, end )");
// The slice method makes a new string by copying a portion of another string. If the
// start parameter is negative, it adds string .length to it. The end parameter is
// optional, and its default value is string .length. If the end parameter is negative, then
// string .length is added to it. The end parameter is one greater than the position of the
// last character. To get n characters starting at position p, use string .slice(p, p +
// n). Also see string .substring and array .slice, later and earlier in this chapter,
// respectively.
var text3 = 'and in it he says "Any damn fool could';
var slice3 = text3.slice(18);
var slice4 = text3.slice(0, 3);
var slice5 = text3.slice(-5);
var slice6 = text3.slice(19, 32);
console.log("slice3:" + slice3);// slice3:"Any damn fool could
console.log("slice4:" + slice4);// slice4:and
console.log("slice5:" + slice5);// slice5:could
console.log("slice6:" + slice6);// slice6:Any damn fool

console.log("-------------------------------------------------- string.split(separator, limit )");
// The split method creates an array of strings by splitting this string into pieces. The
// optional limit parameter can limit the number of pieces that will be split. The separator
// parameter can be a string or a regular expression.
// If the separator is the empty string, an array of single characters is produced:
var digits = '0123456789';
var split0 = digits.split('', 5);
var split1 = digits.split('');
console.log("split0:" + split0);
console.log("split1:" + split1);

// Otherwise, the string is searched for all occurrences of the separator. Each unit of text
// between the separators is copied into the array. The g flag is ignored:
var ip = '192.168.1.0';
var split2 = ip.split('.');
console.log("split2:" + split2);
var cc = '|a|b|c|'.split('|');
console.log("cc:" + cc);
var text00 = 'last,first,middle';
var split3 = text00.split(/\s*,\s*/);
console.log("split3:" + split3);

// There are some special cases to watch out for. Text from capturing groups will be included in
// the split:
var text000 = 'last,first,middle';
var e = text000.split(/\s*(,)\s*/);
console.log("e:" + e);

// Some implementations suppress empty strings in the output array when the separator is a
// regular expression:
var f = '|a|b|c|'.split(/\|/);
console.log("f:" + f);


console.log("-------------------------------------------------- String.fromCharCode(char...)");
// The String.fromCharCode function produces a string from a series of numbers.
var a = String.fromCharCode(67, 97, 116);
console.log("a:" + a);