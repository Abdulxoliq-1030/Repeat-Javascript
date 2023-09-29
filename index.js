const circle = {
  radius: 1,
  draw() {
    console.log("doira");
  },
};

for (let key in circle) console.log(key, circle[key]);

// for (let key of circle) console.log(key, [circle[key]]); // bunda hatolik beradi chunki objectlar not iterable shuning uchun bunda hatolik beradi for of faqat iterablelarda ishlatiladi

for (let key of Object.keys(circle)) console.log(key); // lekin bunda ishlaydi. Object.keys() bizga hossalarni nomini chiqarib beradi.Agar ularning qiymatini ham olmoqchi bo'lsak Object.entries() dan foydalanishimiz kerak.

for (let entry of Object.entries(circle)) console.log(entry); // objectning qiymatlarini olib beradi bu massivdan tashkil topgan massiv qaytarib beradi har bir massivni key value pare ko'rinishda qaytarib beradi

if ("circle" in circle) console.log("Bor"); // ichida shu nomli xossa borligini tekshirish
