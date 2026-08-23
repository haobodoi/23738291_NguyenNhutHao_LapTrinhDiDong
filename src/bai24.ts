abstract class Appliance {
  abstract turnOn(): void;
}

class Fan extends Appliance {
  turnOn(): void {
    console.log("Quạt đã bật");
  }
}

class AirConditioner extends Appliance {
  turnOn(): void {
    console.log("Điều hòa đã bật");
  }
}

const appliances: Appliance[] = [new Fan(), new AirConditioner()];

appliances.forEach(appliance => appliance.turnOn());
