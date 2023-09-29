// factory function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("doira");
    },
  };
}

// constructor function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("doira");
  };
}

const circle = new Circle(1);
circle.color = "green";
circle.move = function () {
  // ...
};
delete circle.color;

console.log(circle);
