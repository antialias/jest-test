const a = require('../a')
describe('a module', function () {
	it('is not mocked', function () {
		expect(a).toEqual('not mocked')
	})
})
