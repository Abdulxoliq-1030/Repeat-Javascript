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

// const circle = new Circle(1);
// circle.color = "green";
// circle.move = function () {
//   // ...
// };

const circle1 = createCircle(1);
const circle2 = new Circle(1);

console.log(circle1.constructor);
console.log(circle2.constructor);

// Har qanday objectning konstructor hossasi bo'ladi bu konstructor bu objectning asosiy objectiga yo'l ko'rsatib beradi
