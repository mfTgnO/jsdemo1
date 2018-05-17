/*https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch*/
// Making fetch requests
// A basic fetch request is really simple to set up. Have a look at the following code:\
fetch('http://example.com/movies.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        console.log(myJson);
    });

// supplying request options
// he fetch() method can optionally accept a second parameter, an init object that allows you to control a number of different settings:
// See fetch() for the full options available, and more details.

// // Example POST method implementation:
console.log("-------------------------------------------------- another example");
postData('http://example.com/answer', {answer: 42})
    .then(data => console.log(data)) // json from `response.json()` call
    .catch(error => console.error(error))

function postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
            'user-agent': 'Mozilla/4.0 MDN Example',
            'content-type': 'application/json'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
    })
        .then(response => response.json()) // parses response to JSON
}