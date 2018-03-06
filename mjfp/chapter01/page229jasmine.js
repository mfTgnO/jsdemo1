describe("roundFix2", function() {
	it("should round 3.14159 to 3 if differences are 0", () => {
		let {
			a,
			r
		} = roundFix2(0.0, 3.14159);
		expect(a).toBeCloseTo(0.14159);
		expect(r).toBe(3);
	});

	it("should round 2.71828 to 3 if differences are 0.14159", () => {
		let {
			a,
			r
		} = roundFix2(0.14159, 2.71828);
		expect(a).toBeCloseTo(-0.14013);
		expect(r).toBe(3);
	});

	it("should round 2.71828 to 2 if differences are -0.14013", () => {
		let {
			a,
			r
		} = roundFix2(-0.14013, 2.71828);
		expect(a).toBeCloseTo(0.57815);
		expect(r).toBe(2);
	});

	it("should round 3.14159 to 4 if differences are 0.57815", () => {
		let {
			a,
			r
		} = roundFix2(0.57815, 3.14159);
		expect(a).toBeCloseTo(-0.28026);
		expect(r).toBe(4);
	});
});