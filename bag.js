class Bag{
    constructor(weight){
        this.weight = weight
        this.validWeight = function () {
            if(this.weight >= 25){
            return false
            } else{
                return true
            }
     }
     
        
    }
}

module.exports = Bag