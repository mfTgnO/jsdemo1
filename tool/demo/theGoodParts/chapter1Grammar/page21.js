document.writeln('hello world!');

Function.prototype.method = function (name,func) {
    this.prototype[name] = func;
    return this;
};

/*
var rm_a = /a*/.match(s);
*/