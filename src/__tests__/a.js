const a = require('../a')
jest.mock('../a')
describe('a module', function () {
	it('should be mocked', function () {
		expect(new a().foo()).toEqual(undefined)
		expect(new a().bar()).toEqual(undefined)
	})
})
