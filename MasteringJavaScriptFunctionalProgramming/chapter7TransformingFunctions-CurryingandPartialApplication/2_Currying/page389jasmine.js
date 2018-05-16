const curryByBind2 = (fn, len = fn.length) => len === 0 ? fn() : p => curryByBind2(fn.bind(null, p), len - 1);
const sum2 = (...args) => args.reduce((x, y) => x + y, 0);

describe("with curryByBind2", function () {
    it("you fix arguments one by one", () => {
        const suma = curryByBind2(sum2, 5);
        const sumb = suma(1)(2)(3)(4)(5);
        expect(sumb).toBe(sum2(1, 2, 3, 4, 5));
    });

    it("you can also work with arity 1", () => {
        const suma = curryByBind2(sum2, 1);
        const sumb = suma(111);
        expect(sumb).toBe(sum2(111));
    });
});