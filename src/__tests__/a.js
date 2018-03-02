const a = require('../a')
jest.mock('../a')
describe('a module', function () {
	it('should be mocked', function () {
		expect(a).toEqual('mocked')
	})
})
