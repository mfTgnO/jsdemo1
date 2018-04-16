// how can we manage this?
// the transformation is rather simple.given a function,we produce a new one:this will return a promise
// that, upon calling the original function with some parameter,will either reject() or resolve() the
// promise appropriately:
const promisify = fn => (...args) =>
    new Promise((resolve, reject) =>
        fn(...args, (err, data) => (err ? reject(err) : resolve(data)))
    );

// with this function,instead of writing code like this:
const fs = require("fs");
const cb = (err, data) =>
    err ? console.log("ERROR", err) : console.log("SUCCESS", data);

fs.readFile("./exist.txt", cb); // success list the data
fs.readFile("./doesnt_exist.txt", cb); // failure,show exception

// instead,you can go with proimse:
const fspromise = promisify(fs.readFile.bind(fs));
const goodRead = data => console.log("SUCCESSFUL PROMISE", data);
const badRead = data => console.log("UNSUCCESSFUL PROMISE", data);
fspromise("./readme.txt")// success
    .then(goodRead)
    .catch(badRead);

fspromise("./readmenot.txt")// failure
    .then(goodRead)
    .catch(badRead);
