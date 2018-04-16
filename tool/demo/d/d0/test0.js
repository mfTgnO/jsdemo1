// Use Case: Check for any occurence of "orange" in an array.
var arr = ['apple', 'orange', 'pear'], found = false;
for (var i = 0, l = arr.length; i < l; i++) {
    if (arr[i] === 'orange') {
        found = true;
    }
}
console.log(found);

// With indexOf():
var arr = ['apple', 'orange', 'pear'];
console.log("found:", arr.indexOf("orange") != -1);