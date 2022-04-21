class profile {
    constructor(name, lastName, age, rating) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.rating = rating;
    }
    getFullName() {
        return `${this.name} ${this.lastName}`
    }
    getGeneralInfo() {
        return `${this.getFullName()} - ${this.age} - ${this.rating}`
    }
}

class travel {
    constructor(origin, destination, date, distance) {
        this.origin = origin;
        this.destination = destination;
        this.date = date;
        this.distance = distance;
    }
    getGeneralInfo() {
        return `${this.origin} - ${this.destination} - ${this.date} - ${this.distance}`
    }
    getOriginAndDestination() {
        return `${this.origin} - ${this.destination}`
    }
}

let perfil1 = new profile("Ricardo", "V", "28", "4.5");
let viaje1 = new travel("La Condesa", "Toluca", "2022-04-01", "59km");

console.log(perfil1.getFullName())
console.log(perfil1.getGeneralInfo())
console.log(viaje1.getGeneralInfo())
console.log(viaje1.getOriginAndDestination())