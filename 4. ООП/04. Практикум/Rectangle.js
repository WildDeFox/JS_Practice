class Rectangle {
  #height;
  #width;

  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }

  getSquare() {
    return this.#height * this.#width;
  }

  getPerimeter() {
    return 2 * (this.#height + this.#width);
  }

  getRatio() {
    return this.getSquare() / this.getPerimeter();
  }
}

let elem = new Rectangle(10, 20);
console.log(elem.getSquare());
console.log(elem.getPerimeter());
console.log(elem.getRatio());