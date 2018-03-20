const myPut = (text,name,tStart,tEnd) => console.log(`${name} - ${text} ${tEnd - tStart} ms`);
/*const myGet = () => performance.now();*/
const myGet = () => performance.now();
const addTiming = (fn,getTime = myGet,output = myPut) => (...args) => {
    let tStart = getTime();
    console.log("tStart:"+tStart);
    try {
        const valueToReturn = fn(...args);
        output("normal exit",fn.name,tStart,getTime());
        let tEnd = getTime();
        console.log("tEnd:"+tEnd);
        return valueToReturn;
    }catch (thrownError){
        output("exception thrown",fn.name,tStart,getTime());
        throw  thrownError;
    }
}

subtract = addTiming(subtract);
/*
let x = subtract(7,5);
console.log("x:" + x);
let y = subtract(4,0);
console.log("y:" + y);*/
