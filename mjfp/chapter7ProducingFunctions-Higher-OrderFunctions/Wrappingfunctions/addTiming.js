const myPut = (text,name,tStart,tEnd) => console.log(`${name} - ${text} - ${tStart} - ${tEnd}`);
const myGet = () => performance.now();
const addTiming = (fn,getTime = myGet,output = myPut) => (...args) => {
    let tStart = getTime();
    try {
        const valueToReturn = fn(...args);
        output("normal exit",fn.name,tStart,getTime());
        return valueToReturn;
    }catch (thrownError){
        output("exception thrown",fn.name,tStart,getTime());
        throw  thrownError;
    }
}