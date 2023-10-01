class Airplane {
    constructor(name) {
        this.name = name
        this.isFlying = null
    }

    takeOff() {
        this.isFlying = true
    }
    land() {
        this
        .isFlying = false
    }
}


let airplane = new Airplane('Airbus')




airplane.takeOff()
airplane.land()
console.log(airplane.name)
console.log(airplane.isFlying)