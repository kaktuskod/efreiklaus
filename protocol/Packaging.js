const Toy = require('./Toy')

class Packaging {
    constructor() {
        this.isOpen = false
        this.toy = null
    }
    open(){
        this.isOpen = true
    }
    insert(toy){
        this.toy = toy
        this.isOpen = false
    }
}

module.exports = Packaging