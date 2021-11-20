class crewMember{
    constructor(number, name, rank){
        this.number = number, 
        this.name = name,
        this.rank = rank,
        this.assignedFlights = []
    }
    assignToFlight(flightNumber) {
       
        this.assignedFlights.push(flightNumber)
    }

}

module.exports = crewMember