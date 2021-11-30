// class Airport {
//     static airports = []
    
//     constructor(name,code){
//     this.name = name
//     this.code = code
//     this.airplanes = []
//     this.constructor.airports.push(this)
//     }

//     land(airplane){
//         this.airplane.push(airplane)
//     }
    

// }
// let a1 = new Airport("Boston Logan", "BOS")
// let a2 = new Airport("Dallas Fort Worth", "DFW")
// // console.log("Airport 1: ", a1)
// console.log("Array of Airports: ", Airport.airports)
// module.exports = Airport

const fs = require('fs')
const path = require('path')

class Airport {
	constructor(name) {
		this.name = name
		this.planes = []
        
        
	}

	addPlane(plane) {
		this.planes.push(plane)
	}
    

    getInfo(callback) {
        //store airport code as a local constant
        const airportCode = this.name
        const airPortName = this.name
        //store file path of json data file as a local constant
        const pathtoData = path.join(__dirname, 'airportsData.json')
        //read the json file
        fs.readFile(pathtoData, (err, data) =>{
            //return all airports as json object
            const airports = JSON.parse(data)
            //return 1 airport whose code matches this airport code
            const airport = airports.find(airport => airport.iata === airportCode)
            callback(err,airport)
        })
    }
}

module.exports = Airport

