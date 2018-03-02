const a = require('../a')
describe('a module', function () {
	it('should be mocked', function () {
		expect(new a().foo()).toEqual('mocked foo function')
		expect(new a().bar()).toEqual('mocked bar function')
	})
})
