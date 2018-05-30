this.properties = {constructor: this};
console.log("-------------------------------------------------- another example");
//
/*Function.method('new', function () {
    // Create a new object that inherits from the
// constructor's prototype.
    var that = Object.beget(this.properties);
    // Invoke the constructor, binding -this- to
// the new object.
    var other = this.apply(that, arguments);
    // If its return value isn't an object,
// substitute the new object.
    return (typeof other === 'object' && other) || that;
});*/
console.log("-------------------------------------------------- another example");
// We can define a constructor and augment its prototype:
var Mammal = function (name) {
    this.name = name;
};
Mammal.prototype.get_name = function () {
    return this.name;
};
Mammal.prototype.says = function () {
    return this.saying || '';
};

var mammal = new Mammal('Herb the Mammal');
var name2 = mammal.get_name();
console.log("name2:" + name2);

console.log("-------------------------------------------------- another example");
var Cat = function (name) {
    this.name = name;
    this.saying = 'meow';
};
// Replace Cat.prototype with a new instance of Mammal
Cat.prototype = new Mammal();
// Augment the new prototype with
// purr and get_name methods.
Cat.prototype.purr = function (n) {
    var i, s = '';
    for (i = 0; i < n; i += 1) {
        if (s) {
            s += '-';
        }
        s += 'r';
    }
    return s;
};

Cat.prototype.get_name = function () {
    return this.says() + ' ' + this.name + ' ' + this.saying;
};
var myCat = new Cat('Henrietta');
var says = myCat.says();
var purr = myCat.purr(5);
var name_ = myCat.get_name();

console.log("says:" + says);
console.log("purr:" + purr);
console.log("name_:" + name_);

console.log("-------------------------------------------------- another example");
Function.method('inherits', function (Parent) {
    this.prototype = new Parent();
    return this;
});

var Cat_ = function (name) {
    this.name = name;
    this.saying = 'meow';
}.inherits(Mammal).method('purr', function (n) {
    var i, s = '';
    for (i = 0; i < n; i += 1) {
        if (s) {
            s += '-';
        }
        s += 'r';
    }
    return s;
}).method('get_name', function () {
    return this.says() + ' ' + thihazards.name + ' ' + this.says();
});