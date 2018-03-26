// https://www.tutorialspoint.com/nodejs/nodejs_event_loop.htm

// how node application work?
var fs = require("fs");

// read file
fs.readFile('input3.txt',function (err,data) {
    if (err){
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});
console.log("program ended");