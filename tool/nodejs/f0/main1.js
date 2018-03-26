/*
These two examples explain the concept of blocking and non-blocking calls.

    The first example shows that the program blocks until it reads the file and then only it proceeds to end the program.

    The second example shows that the program does not wait for file reading and proceeds to print "Program Ended" and at the same time, the program without blocking continues reading the file.

Thus, a blocking program executes very much in sequence. From the programming point of view, it is easier to implement the logic but non-blocking programs do not execute in sequence. In case a program needs to use any data to be processed, it should be kept within the same block to make it sequential execution.
* */

var fs = require("fs");

fs.readFile("input1.txt", function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log("Program Ended");