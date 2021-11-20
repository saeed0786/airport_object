const airPort = require("./airPort")

describe('DFW', ()=> {
    test('located in Dallas', () => {
        const testairPort = new airPort("DFW")
        expect(testairPort.name).toBe("DFW")
    })

})
