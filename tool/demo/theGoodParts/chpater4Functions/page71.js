// 4.2. Function Literal
// a anonymous function
var add = function (a, b) {
    return a + b;
};

// 4.3. Invocation
/*There are four patterns of invocation in JavaScript: the method
invocation pattern, the function invocation pattern, the constructor invocation pattern, and the apply
invocation pattern. The patterns differ in how the bonus parameter this is initialized.*/
// 4.3.1. The Method Invocation Pattern

// Create myObject. It has a value and an increment
// method. The increment method takes an optional
// parameter. If the argument is not a number, then 1
// is used as the default.
var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

myObject.increment();
document.writeln(myObject.value); // 1
myObject.increment(2);
document.writeln(myObject.value); // 3
myObject.increment(2);
document.writeln(myObject.value); // 5

// 4.3.2. The Function Invocation Pattern
// When a function is not the property of an object, then it is invoked as a function:
var sum = add(3, 5);// sum is 8
document.writeln(sum);

// 4.3.4. The Apply Invocation Pattern
// Because JavaScript is a functional object-oriented language, functions can have methods.
// The apply method lets us construct an array of arguments to use to invoke a function. It also lets us choose
// the value of this. The apply method takes two parameters. The first is the value that should be bound to
// this. The second is an array of parameters.

// Make an array of 2 numbers and add them.
var array = [3, 4];
var sum = add.apply(null, array); // sum is 7
// Make an object with a status member.
var statusObject = {
    status: 'A-OK'
};
// statusObject does not inherit from Quo.prototype,
// but we can invoke the get_status method on
// statusObject even though statusObject does not have
// a get_status method.
// var status = Quo.prototype.get_status.apply(statusObject);
// status is 'A-OK'

// 4.4. Arguments

// A bonus parameter that is available to functions when they are invoked is the arguments array. It gives the
// function access to all of the arguments that were supplied with the invocation, including excess arguments that
// were not assigned to parameters. This makes it possible to write functions that take an unspecified number of
// parameters:

// Make a function that adds a lot of stuff.
// Note that defining the variable sum inside of
// the function does not interfere with the sum
// defined outside of the function. The function
// only sees the inner one.

var sum = function () {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
    }
    return sum;
};
document.writeln(sum(4, 8, 15, 16, 23, 42));// 108


// 4.5. Return
// If the function was invoked with the new prefix and the return value is not an object, then this (the new
// object) is returned instead.

// 4.6. Exceptions
var add0 = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name: 'TypeError',
            message: 'add needs numbers'
        }
    }
    return a + b;
};
// document.writeln(add0(1,'1'));
document.writeln(typeof '1');

// The exception object will be delivered to the catch clause of a try statement:
// Make a try_it function that calls the new add
// function incorrectly.
var try_it = function () {
    try {
        add0("abc");
    } catch (e) {
        document.writeln(e.name + ":" + e.message);
    }
};
// try_it();

// 4.7. Augmenting Types
console.log("-------------------------------------------------- another example");
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

Number.method('integer', function () {
    // return Math[this < 0 ? 'ceiling' : 'floor'](this);
    return Math[this < 0 ? 'ceiling' : 'floor'](this);
});

// document.writeln((-10 / 3).integer());// -3

console.log("-------------------------------------------------- another example");
String.method('trim', function () {
    return this.replace(/^\s+|\s+$/g, '');
});

// document.writeln('"' + " neat ".trim() + '"');

console.log("-------------------------------------------------- another example");
// Add a method conditionally.
Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
};

// 4.8. Recursion
console.log("-------------------------------------------------- another example");
var hanoi = function (disc, src, aux, dst) {
    if (disc > 0) {
        hanoi(disc - 1, src, dst, aux);
        document.writeln('Move disc ' + disc + ' from ' + src + ' to ' + dst);
        hanoi(disc - 1, aux, src, dst);
    }
}
// hanoi(3, 'Src', 'Aux', 'Dst');

// Define a walk_the_DOM function that visits every
// node of the tree in HTML source order, starting
// from some given node. It invokes a function,
// passing it each node in turn. walk_the_DOM calls
// itself to process each of the child nodes.
var walk_the_dom = function walk(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        node = node.nextSibling;
    }
};

// Define a getElementsByAttribute function. It
// takes an attribute name string and an optional
// matching value. It calls walk_the_DOM, passing it a
// function that looks for an attribute name in the
// node. The matching nodes are accumulated in a
// results array.
var getElementsByAttributes = function (att, func) {
    var results = [];
    walk_the_dom(document.body, function (node) {
        var actual = node.nodeType === 1 && node.getAttrib(att);
        if (typeof actual === 'string' && (actual === value || typeof  value != 'string')) {
            results.push(node);
        }
    });
    return results;
};

// Make a factorial function with tail
// recursion. It is tail recursive because
// it returns the result of calling itself.
// JavaScript does not currently optimize this form.
var factorial = function (i, a) {
    a = a || 1;
    console.log(a + "---" + i);
    // console.log("i:" + i);
    if (i < 2) {
        return a;
    }
    return factorial(i - 1, a * i);
};
document.writeln(factorial(4));// 24

// 4.9. Scope
console.log("-------------------------------------------------- 4.9. Scope");
var foo = function () {
    var a = 3, b = 5;
    var bar = function () {
        var b = 7, c = 11;
        // At this point, a is 3, b is 7, and c is 11
        console.log(">>>1   a:" + a + "     b:" + b + "     c:" + c);
        a += b + c;
        // At this point, a is 21, b is 7, and c is 11
        console.log(">>>2   a:" + a + "     b:" + b + "     c:" + c);
    };
    // At this point, a is 3, b is 5, and c is not defined
    console.log(">>>3   a:" + a + "     b:" + b);
    bar();
    // At this point, a is 21, b is 5
    console.log(">>>4   a:" + a + "     b:" + b);
};
foo();

// 4.10. Closure
console.log("-------------------------------------------------- 4.10. Closure");
var myObject = function () {
    var value = 0;
    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function () {
            return value;
        }
    }
}();
myObject.increment(5);
console.log(myObject.getValue());
myObject.increment(4);
console.log(myObject.getValue());

// Create a maker function called quo. It makes an
// object with a get_status method and a private
// status property.
var quo = function (status) {
    return {
        get_status: function () {
            return status;
        }
    };
};
// Make an instance of quo.
var myQuo = quo("amazed");
document.writeln(myQuo.get_status());

//
// Define a function that sets a DOM node's color
// to yellow and then fades it to white.
var fade = function (node) {
    var level = 1;
    var step = function () {
        var hex = level.toString(16);
        console.log("hex:" + hex);
        node.style.backgroundColor = '#FFFF' + hex + hex;
        if (hex < 15) {
            level += 1;
            setTimeout(step, 100);
        }
    };
    setTimeout(step, 100);
};
fade(document.body);