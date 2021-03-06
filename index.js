let store = {
  drivers: [],
  passengers: [],
  trips: []
}

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;

    store.drivers.push(this);
  }
  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.driverId === this.id;
      }.bind(this)
    );
  }
  passengers() {
    let passengerList = [];
    for (const trip of this.trips()) {
      passengerList.push(trip.passenger());
    }
    return passengerList;
  }
}

class Passenger {
  constructor(name) {
    this.name = name;
    this.id = ++passengerId;

    store.passengers.push(this);
  }
  trips() {
    return store.trips.filter(
      function(trip) {
        return trip.passengerId === this.id;
      }.bind(this)
    );
  }
  drivers() {
    let driverList = [];
    for (const trip of this.trips()) {
      driverList.push(trip.driver());
    }
    return driverList;
  }
}

class Trip {
  constructor(driver, passenger) {
    if (driver) {
      this.driverId = driver.id;
    }
    if (passenger) {
      this.passengerId = passenger.id;
    }
    this.id = ++tripId;

    store.trips.push(this);
  }
  passenger() {
    return store.passengers.find(
      function(passenger) {
        return passenger.id === this.passengerId;
      }.bind(this)
    );
  }
  driver() {
    return store.drivers.find(
      function(driver) {
        return driver.id === this.driverId;
      }.bind(this)
    );
  }
}
