describe("with curryByBind", function () {
    it("you fix arguments one by one", () => {
        const make3a = curryByBind(make3);
        const make3b = make3a(1)(2);
        const make3c = make3b(3);
        expect(make3c).toBe(make3(1, 2, 3));
    });
});