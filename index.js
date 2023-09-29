// For in and For of

// For in => Object ni hossalari bo'ylab aylanadi
// For of => Objectni elementlari bo'ylab yurib chiqadi

const person = {
  name: "Jamol",
  age: 37,
};

for (let key in person) {
  console.log(key, person[key]);
}

let colors = ["white", "black", "green", "blue"];

for (let index in colors) {
  console.log(index, colors[index]);
}

for (let color of colors) {
  console.log(color);
} // this useful array elements
