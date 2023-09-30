function sayHello() {
  let greeting = "Hello";

  if (true) {
    const farewell = "Good Bye";
  }
  console.log(farewell);

  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

// Local va global o'zgaruvchilar agar o'zgaruvchi funksiya yoki if, for blocklarini ichida bo'lishi mumkin va bu holatda uni tashqarida ishlata olmaymiz

// let va const bilan e'lon qilingan o'zgaruvchilarni ko'rinish doirasi ular e'lon qilingan {} larni orasidagina ishlaydi tashqarida ishlata olmaymiz va ular local o'zgaruvchilar deb ataladi

sayHello();

function sayHi() {
  let greeting = "hi";
}
