/*const addLogging = fn => (...args) => {
    console.log(`entering ${fn.name}: ${args}`);
    const valueToReturn = fn(...args);
    console.log(`existing ${fn.name}: ${valueToReturn}`);
    return valueToReturn;
};*/


// Taking exceptions into account
const addLogging2 = fn => (...args) => {
    console.log(`entering ${fn.name}:${args}`);
    try {
        const valueToReturn = fn(...args);
        console.log(`exiting ${fn.name}:${valueToReturn}`);
        return valueToReturn;
    } catch (thrownError){
        console.log(`exiting ${fn.name}:threw ${thrownError}`);
        throw thrownError;
    }
};

// the logging function should be passed as an argument to the wrapper function,
// so we can change it if we need to
/*const addLogging3 = (fn,logger = console.log) => (...args) => {
    logger(`entering ${fn.name}: ${args}`);
    try {
        const valueToReturn = fn(...args);
        logger(`exiting ${fn.name}: ${valueToReturn}`);
        return valueToReturn;
    } catch (thrownError){
        logger(`exiting ${fn.name}: threw ${thrownError}`);
        throw thrownError;
    }
};*/


function subtract(a,b) {
    b = changeSign(b);
    return a + b;
}
function changeSign(a) {
    return -a;
}
subtract = addLogging2(subtract)
changeSign = addLogging2(changeSign);
// let x = subtract(7,5);
// console.log("x:"+x);


// --
/*
const addLogging = fn => (...args) => {
    console.log(`entering ${fn.name}: ${args})`);
    const valueToReturn = fn(...args);
    console.log(`exiting ${fn.name}: ${valueToReturn}`);
    return valueToReturn;
};*/

