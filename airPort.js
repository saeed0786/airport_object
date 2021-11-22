class Airport {
    static airports = []
    
    constructor(name,code){
    this.name = name
    this.code = code
    this.airplanes = []
    this.constructor.airports.push(this)
    }

    land(airplane){
        this.airplane.push(airplane)
    }

}
let a1 = new Airport("Boston Logan", "BOS")
let a2 = new Airport("Dallas Fort Worth", "DFW")
// console.log("Airport 1: ", a1)
console.log("Array of Airports: ", Airport.airports)
module.exports = Airport