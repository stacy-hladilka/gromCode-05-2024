"use strict";

export class Vehicle {
  constructor() {
    this.name = "Argo";
    this.numberOfWheels = 4;
  }

  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
}

export class Ship extends Vehicle {
  constructor(name, numberOfWheels, maxSpeed) {
    this.name = name;
    this.numberOfWheels = numberOfWheels;
    this.maxSpeed = maxSpeed;
  }
  move() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  }

  stop() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  }
}
