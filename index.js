// function start() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//     if (true) {
//       var color = "White"; // local issue
//     }
//   }
//   //   console.log(color); it works
// }

// start();

// Var bilan Let ning farqi ularning scopelar orasida ishlashida let bitta scope bilan chegaralanadi misol uchun forning blocki bilan lekin var ning blocki esa butun boshli funksiya bilan chegaralanadi va bu juda yomon bu muammolarga olib kelishi mumkin

var color = "green";
let age = 36;

// Agar var o'zgaruvchini funksiyadan tashqarida eng yuqorida e'lon qilsak u browserning window objectiga biriktirib qo'yiladi

// Agar bunday qilinadigan bo'lsa window objectining boshqa methodlari bilan biz e'lon qilgan hossamiz bir xil bo'lib qolib conflict bo'lishi mumkin bunday qilmaslk uchun umuman var ni ishlatmasligimiz kerak
