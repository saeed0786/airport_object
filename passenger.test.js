const passenger = require("./passenger")

describe('Passenger class', ()=> {
    test('number of Passenger', () => {
        const testPassenger = new passenger(200)
        expect(testPassenger.number).toBe(200)
    })

})