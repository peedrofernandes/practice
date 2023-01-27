import { Observer, Subject } from "./observer";

class WeatherStation implements Subject {
  private temperature: number;
  private observers: Observer[] = [];

  constructor(temperature: number) {
    this.temperature = temperature;
  }

  setTemperature(temp: number) {
    console.log("WeatherStation: new temperature measurement: " + temp);
    this.temperature = temp;
    this.notifyObserver()
  }

  public registerObserver(o: Observer) {
    this.observers.push(o);
  }

  public removeObserver(o: Observer) {
    const index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }

  public notifyObserver() {
    this.observers.forEach(o => {
      o.update(this.temperature);
    })
  }
}

class TemperatureDisplay implements Observer {
  private subject: Subject;

  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }

  public update(tempearature: number) {
    console.log("TemperatureDisplay: I need to update my display.");
  }
}

class Fan implements Observer {
  private subject: Subject;

  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }

  public update(temperature: number) {
    switch (true) {
      case (temperature < 28): {
        console.log("Fan turned off.");
        break;
      }
      case (temperature >= 28 && temperature < 30): {
        console.log("Fan speed: 1.");
        break;
      }
      case (temperature >= 30 && temperature < 32): {
        console.log("Fan speed: 2.");
        break;
      }
      case (temperature >= 32): {
        console.log("Too hot! Fan speed: 3.");
        break;
      }
    }
  }
}

const weatherStation = new WeatherStation(25);
const tDisplay = new TemperatureDisplay(weatherStation);
const fan = new Fan(weatherStation);

weatherStation.setTemperature(26);
weatherStation.setTemperature(28);
weatherStation.setTemperature(30);
weatherStation.setTemperature(29);
weatherStation.setTemperature(33);
