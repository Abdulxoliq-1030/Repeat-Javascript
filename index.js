// console.log(Math.round(4.3)); // 4
// console.log(Math.pow(8, 2)); // 64
// console.log(Math.random()); // return a random number

let greeting = "Hello"; // String primitive
let greeting2 = new String(); // String object
console.log(greeting.length);
console.log(greeting.includes("He")); // true
console.log(greeting.startsWith("Hello")); // true
console.log(greeting.endsWith("o")); // true
console.log(greeting.indexOf("llo")); // 2
console.log(greeting.replace("Hel", "Sal"));

const greeting3 = " Hello there ";

console.log(greeting3.trim());

let text = "Salomlashishlil uchun 'Assalom alaykum' deb aytasiz.";
console.log(text);

console.log(text.split(" "));

let text2 = `this is my
'first' message`;

console.log(text2);

// String objectlari immutable hisoblanadi string metodlarini ishlashi natijasida yangi string qaytariladi
