describe('just a test',function(){
	it('test showName',function(){
		var c ='ck';
		var exp = 'my name is ck';
		expect(exp).toEqual(showName(c));
	});
});