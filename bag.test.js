/*const { expect } = require('@jest/globals')
const Bag = require('./bag')

describe('Bag', () => {
    test('bags have weight', () =>{
        const testBag = new Bag(25)
        expect(testBag.weight).toBe(25)
    })

})*/
const Bag = require('./Bag')

describe('Bag objects', () => {

	test('Bags have weight', () => {
		const testBag = new Bag(25)
		expect(testBag.weight).toBe(25)
	})

	test("throws error if bag doesn't have weight", () => {
		expect(() => new Bag()).toThrowError('bag must have a weight')
	})
})