interface Vehicle {
  start(): void;
  stop(): void;
}

class Car implements Vehicle {
  start(): void {
    console.log("Car starts.");
  }

  stop(): void {
    console.log("Car stops.");
  }
}

class Bike implements Vehicle {
  start(): void {
    console.log("Bike starts.");
  }

  stop(): void {
    console.log("Bike stops.");
  }
}

const vehicles: Vehicle[] = [new Car(), new Bike()];

vehicles.forEach(vehicle => {
  vehicle.start();
  vehicle.stop();
});
