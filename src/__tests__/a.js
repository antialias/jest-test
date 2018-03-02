const a = require('../a')
describe('a module', function () {
	it('should be mocked', function () {
		expect(a).toEqual('mocked')
	})
})
