const a = require('../a')
jest.mock('../a', () => {
	const unmockedA = jest.genMockFromModule('../a')
	return class extends unmockedA {
		foo() {
			return "mocked foo function"
		}
	}
})
describe('a module', function () {
	it('should be mocked', function () {
		expect(new a().constructorran).toBeUndefined()
		expect(new a().foo()).toEqual('mocked foo function')
		expect(new a().bar()).toEqual(undefined)
	})
})
