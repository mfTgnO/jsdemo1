// Use Case: Parse and return a array of objects that contains a additional new property, full_name

// without:map()
var oldArr = [{first_name: "Colin", last_name: "Toh"}, {first_name: "Addy", last_name: "Osmani"}, {
    first_name: "Yehuda",
    last_name: "Katz"
}];

function getNewArr() {
    var newArr = [];
    for (var i = 0, l = oldArr.length; i < l; i++) {
        var item = oldArr[i];
        item.full_name = [item.first_name, item.last_name].join(" ");
        newArr[i] = item;
    }
    return newArr;
}

console.log(getNewArr());
console.log("=============================")

// with:map()
function getNewArr1() {
    return oldArr.map(function (item, index) {
        item.full_name = [item.first_name, item.last_name].join("_");
        return item;
    });
}

console.log(getNewArr1());

// map() is now my favourite method to use in javascript-heavy applications which deal with manipulation of server-sent data.