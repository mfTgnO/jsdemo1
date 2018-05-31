// 6.7. Dimensions
/*Array.dim = function (dimension, initial) {
    var a = [], i;
    for (i = 0; i < dimension; i += 1) {
        a[i] = initial;
    }
    return a;
};

// Make an array containing 10 zeros.
var myArray = Array.dim(10, 0);
console.log("myArray:" + myArray);
console.log("myArray.length:" + myArray.length)*/

// To make a two-dimensional array or an array of arrays, you must build the arrays yourself:
/*var i, n;
for (i = 0; i < n; i += 1) {
    my_array[i] = [];
}*/
// Note: Array.dim(n, []) will not work here.
// Each element would get a reference to the same
// array, which would be very bad.
console.log("-------------------------------------------------- another example");
Array.matrix = function (m, n, initial) {
    var a, i, j, mat = [];
    for (i = 0; i < m; i += 1) {
        a = [];
        for (j = 0; j < n; i += 1) {
            a[j] = initial;
        }
        mat[i] = a;
    }
    return mat;
};

// Make a 4 * 4 matrix filled with zeros.
var myMatrix = Array.matrix(4, 4, 0);
/*
document.writeln(myMatrix[3][3]);
document.writeln(myMatrix);*/
console.log(myMatrix);

// Method to make an identity matrix.
/*
Array.identity = function (n) {
    var i, mat = Array.matrix(n, n, 0);
    for (i = 0; i < n; i += 1) {
        mat[i][i] = 1;
    }
    return mat;
}
var identity = Array.identity(4);
document.writeln(identity[3][3]);*/
