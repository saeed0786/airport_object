
const Bag = require("./bag")

describe('Bag class', ()=> {
    test('bag needs a weight', () => {
        const testBag = new Bag(25)
        expect(testBag.weight).toBe(25)
    })
    test('bag needs a weight', () => {
        const testBag = new Bag(3)
        expect(testBag.validWeight()).toBe(true)
    })
})