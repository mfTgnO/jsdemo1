const objCopy = obj => {
    let copy = Object.create(Object.getPrototypeOf(obj));
    Object.getOwnPropertyNames(obj).forEach(prop =>
        Object.defineProperty(
            copy,
            prop,
            Object.getOwnPropertyDescriptor(obj,prop)
        )
    );
    return copy;
}

const myObj = {fk:32,st:12,desc:"couple"};
const myCopy = objCopy(myObj);
console.log(myObj,myCopy);