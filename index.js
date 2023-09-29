function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

// const Circle2 = new Function(
//   "radius",
//   `
// this.radius = radius;
// this.draw = function () {
//   console.log("draw");
// };
// `
// );

// const circle = new Circle2(3);
// console.log(circle);

Circle.call({}, 4);

Circle.apply({}, [5]);

// Javascriptda funksiyalar ham object hisoblanadi.
