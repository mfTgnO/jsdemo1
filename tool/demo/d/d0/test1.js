// Use Case: Find me all the items in the array that have the name "orange"
// without:filter()
var arr = [{"name": "apple", "count": 2},
    {"name": "orange", "count": 5},
    {"name": "pear", "count": 3},
    {"name": "orange", "count": 16}
];
var newArr = [];
for (var i = 0, l = arr.length; i < l; i++) {
    if (arr[i].name === "orange") {
        newArr.push(arr[i]);
    }
}

console.log("filter results:", newArr);

// with:filter()
var newArr1 = arr.filter(function (item) {
    return item.name === "orange";
});
console.log("filter results1:", newArr1);