var maxCallback = (acc , cur) => Math.max(acc.x, cur.x);
var maxCallback2 = (max, cur) => Math.max(max, cur);

// reduce() without initialValue
[{x:22},{x:33}].reduce(maxCallback); // 33
[{x:33}].reduce(maxCallback);
[].reduce(maxCallback);

// map/reduce; better solution, also works for empty or larger arrays
[{x:22},{x:33}].map(el => el.x).reduce(maxCallback2,-Infinity);