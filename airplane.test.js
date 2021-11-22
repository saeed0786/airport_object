const airPlane = require("./airPlane")
//const Airport = require("./airPort")

describe('airPlane number of passengers', ()=> {
    test('needs a name', () => {
        const testairPlane = new airPlane("AA001")
        expect(testairPlane.model).toBe("AA001")
    })
    
test('flight number', () => {
    const testairPlane = new airPlane(null, null, 2500)
    expect(testairPlane.flightNumber).toBe(2500)
})
})
