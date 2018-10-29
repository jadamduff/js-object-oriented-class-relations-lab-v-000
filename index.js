let store = {
  drivers: [],
  passengers: [],
  trips: []
}

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver = {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;
  }
  
}

class Passenger = {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;
  }
}

class Trip = {
  constructor(driver, passenger) {
    if (driver) {
      this.driverId = driver.id;
    }
    if (passenger) {
      this.passengerId = passeneger.id;
    }
    this.id = ++tripId;
  }
}
