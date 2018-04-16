// Use Case: Iterate through an array
var arr = [1, 2, 3, 4, 5, 6, 7, 8];

// use the usual "for" loop to iterate
for (var i = 0, l = arr.length; i < l; i++) {
    console.log(arr[i]);
}
console.log("=============================")

// use foreach to iterate
arr.forEach(function (item, index) {
    console.log(item);
});

// A commonly overlooked problem of using for loop is that the variables declared within the for loop are not local to the loop. These variables are accessible within the same scope the for loop is in and are susceptible to be overwritten.