const myParameters = {
    method: "GET",
    header: new Headers(),
    cache: "default"
};
const myFetch = partial(fetch,undefined,myParameters);
// undefined means the first argument for fetch is not yet defined
// the second argument for fetch() is set to myParameters
myFetch("a/first/url").then(/* do something */).catch(/* on error */);
myFetch("a/second/url")
    .then(/* do something else */)
    .catch(/* on error */);
