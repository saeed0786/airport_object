const { expect } = require('@jest/globals')
const Bag = require('./bag')

describe('Bag', () => {
    test('bags have weight', () =>{
        const testBag = new Bag(25)
        expect(testBag.weight).toBe(25)
    })

})