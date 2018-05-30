// 5.2. Object Specifiers
var myObject = maker(f, l, m, c, s);

// we can write:
var myObject_ = maker({
    first: f,
    last: l,
    state: s,
    city: c
});

// 5.3. Prototypal
var myMammal = {
    name: 'Herb the mammal',
    get_name: function () {
        return this.name;
    }, says: function () {
        return this.saying || '';
    }
};

var myCat = Object.beget(myMammal);
myCat.name = 'Henrietta';
myCat.saying = 'meow';
myCat.purr = function (n) {
    var i, s = '';
    for (i = 0; i < n; i++) {
        if (s) {
            s += '-';
        }
        s += 'r';
    }
    return s;
};

myCat.get_name = function () {
    return this.saying + ' ' + this.name + ' ' + this.saying;
};

var block = function () {
    // Remember the current scope. Make a new scope that
    // includes everything from the current one.
    var oldScope = scope;
    scope = Object.beget(scope);
    // Advance past the left curly brace.
    advance('{');
    // Parse using the new scope.
    parse(scope);
    // Advance past the right curly brace and discard the
    // new scope, restoring the old one.
    advance('}');
    scope = oldScope;
};

// 5.4. Functional
var constructor = function (spec, my) {
    var that, other_private_instance_variables;
    my = my || {};
    // Add shared variables and functions to my
    that = a_new_object;
    // Add privileged methods to that
    return that;
};

//
var mammal0 = function (spec) {
    var that = {};
    that.get_name = function () {
        return spec.name;
    };
    that.says = function () {
        return spec.saying || '';
    };
    return that;
};
var myMamma0 = mammal0({name: 'Herb'});