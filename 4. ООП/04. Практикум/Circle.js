class Circle {
  #radius;
  PI = 3.14;

  constructor(radius) {
    this.#radius = radius;
  }

  getSquare() {
    return this.PI * this.#radius ** 2;
  }

  getLenght() {
    return 2 * this.PI * this.#radius;
  }
}

let circle = new Circle(4);
console.log(circle.getSquare());
console.log(circle.getLenght());