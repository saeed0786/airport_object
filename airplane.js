class airPlane{
    constructor(name, passenger, flightNumber){
        this.name = name,
        this.passenger = [],
       this.flightNumber = flightNumber
        }
        passengerBoarded(passenger) {
            this.passenger.push(passenger)
        }

 
}

module.exports = airPlane