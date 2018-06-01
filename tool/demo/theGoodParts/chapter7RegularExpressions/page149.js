// 7.2. Construction

// Make a regular expression object that matches
// a JavaScript string.
var my_regexp = /"(?:\\.|[^\\\"])*"/g;

// FlagMeaning
// g:Global (match multiple times;the precise meaning of this varies with the method)
// i:Insensitive(ignore character case)
// m:Multiline(^ and $ can match line-ending characters)
console.log("-------------------------------------------------- another example");
// Make a regular expression object that matches
// a JavaScript string.
var my_regexp = new RegExp("\"(?:\\.|[^\\\\\\\"])*\"", 'g');

// Table 7-2. Properties of RegExp objects

// RegExp objects made by regular expression literals share a single instance:
function make_a_matcher() {
    return /a/gi;
}

var x = make_a_matcher();
var y = make_a_matcher();
x.lastIndex = 10;
console.log("x.lastIndex:" + x.lastIndex);
document.writeln("y.lastIndex:" + y.lastIndex);

// \1 is a reference to the text that was captured by group 1 so that it can be matched again. For example, you
// could search text for duplicated words with:
var doubled_words = /[A-Za-z\u00C0-\u1FFF\u2800-\uFFFD'\-]+\s+\1/gi;