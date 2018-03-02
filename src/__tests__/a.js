const a = require('../a')
jest.mock('../a', () => {
	return class {
		foo() {
			return "mocked foo function"
		}
	}
})
describe('a module', function () {
	it('should be mocked', function () {
		expect(new a().foo()).toEqual('mocked foo function')
		expect(new a().bar).toBeUndefined();
	})
})
