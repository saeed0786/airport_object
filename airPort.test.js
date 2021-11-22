const Airport = require("./airPort")

describe('DFW', ()=> {
    test('located in Dallas', () => {
        const testairPort = new Airport("Dallas fort worth","DFW")
        expect(testairPort.name).toBe("Dallas fort worth")
    })

})
