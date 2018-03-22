function fib(n) {
    if (n == 0){
        return 0;
    }else if (n == 1){
        return 1;
    }else{
        return fib(n - 2) * fib(n - 1);
    }
}

const memoize = fn =>{
    let cache = {};
    return x => (x in cache ? cache[x] : (cache[x] = fn(x)));
};
fib = memoize(fib);
const testFib = n => fib(n);
addTiming(testFib)(45);
addTiming(testFib)(45);
addTiming(testFib)(40);
addTiming(testFib)(35);

/*
const testMemoFib = memoize(n => fib(n));
addTiming(testMemoFib)(45);
addTiming(testMemoFib)(45);
addTiming(testMemoFib)(40);
addTiming(testMemoFib)(40);
addTiming(testMemoFib)(35);*/
