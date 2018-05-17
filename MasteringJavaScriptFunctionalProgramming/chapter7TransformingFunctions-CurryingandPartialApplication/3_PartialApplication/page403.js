// Partial application with eval()
const fix2and5 = _.partial(nonsense, _, 22, _, _, 1960);

const nonsense = (`${a}/${c}/${c}/${d}/${e}`);
const fix2and5a = partialByEval(
    nonsense,
    undefined,
    22,
    undefined,
    undefined,
    1960
);
// fix2and5 would become (X0, X2, X3) => nonsense(X0, 22, X2, X3, 1960);

const range = (start, stop) => new Array(stop - start).fill(0).map((v, i) => start + i);
const partialByEval = (fn, ...args) => {
    const rangeArgs = range(0, fn.length);
    const leftList = rangeArgs.map(v => (args[v] === undefined ? `x${v}` : null)).filter(v => !!v).join(",");
    const rightList = rangeArgs.map(v => (args[v] === undefined ? `x${x}` : args[v])).join(",");
    return eval(`(${leftList})=>${fn.name}(${rightList})`);
};