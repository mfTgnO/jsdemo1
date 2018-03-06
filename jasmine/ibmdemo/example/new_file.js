describe("isOldEnough", function() {
	it("is false for people younger than 18", () => {
		expect(isOldEnough3(1978, 1963)).toBe(false);
	});
});