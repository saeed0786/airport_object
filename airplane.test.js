const airPlane = require("./airPlane")

describe('airPlane number of passengers', ()=> {
    test('needs a name', () => {
        const testairPlane = new airPlane("americanAirline")
        expect(testairPlane.name).toBe("americanAirline")
    })
    
        test('class passengers', () => {
            const testairPlane = new airPlane([])
            expect(testairPlane.passenger).toStrictEqual([])

})
test('fligh number', () => {
    const testairPlane = new airPlane(null, null, 2500)
    expect(testairPlane.flightNumber).toBe(2500)
})
})