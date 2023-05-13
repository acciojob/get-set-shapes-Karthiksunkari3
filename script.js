class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this._side = side;
  }

  get side() {
    return this._side;
  }

  getPerimeter() {
    return 4 * this._side;
  }
}

// Example usage
const rectangle = new Rectangle(5, 3);
console.log(rectangle.width); // Output: 5
console.log(rectangle.height); // Output: 3
console.log(rectangle.getArea()); // Output: 15

const square = new Square(4);
console.log(square.side); // Output: 4
console.log(square.getArea()); // Output: 16
console.log(square.getPerimeter()); // Output: 16
