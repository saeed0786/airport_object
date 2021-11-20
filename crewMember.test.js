const crewMember = require("./crewMember")

describe('crewMember class', ()=> {
    test('creMember needs a number', () => {
        const testcrewMember = new crewMember(10)
        expect(testcrewMember.number).toBe(10)

    })
    test('creMember needs a name', () => {
        const testcrewMember = new crewMember(10, 'Saeed')
        expect(testcrewMember.name).toBe('Saeed')

    })
    test('creMember needs a rank', () => {
        const testcrewMember = new crewMember(10, 'saeed', 'first officer')
        expect(testcrewMember.rank).toBe('first officer')

    })
    test("assignedFlightNumber", () => {
        const testcrewMember = new crewMember(10)
        testcrewMember.assignToFlight(289)
        expect(testcrewMember.assignedFlights).toStrictEqual([289])
    })


})