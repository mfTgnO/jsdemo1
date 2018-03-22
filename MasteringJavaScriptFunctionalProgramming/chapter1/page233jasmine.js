describe("getRandomFileName", function() {
	let a = [];
	let f = () => a.shift();

	beforeEach(() => {
		a = "SORTOFRANDOM".split("");
	});

	it("uses the given letters for the file name", () => {
		let fileName = getRandomFileName("", f);
		expect(fileName.startsWith("SORTOFRANDOM")).toBe(true);
	});

	it("includes the right extension, and has the right length", () => {
		let fileName = getRandomFileName(".pdf", f);
		expect(fileName.endsWith()).toBe(true);
		expect(fileName.length).toBe(16);
	});
});