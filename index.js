// Reference types => Object, function, Array
// Value types  => Number, String, Boolean, Undefined, null, Symbol

let a = 5;
let b = a;
a = 10;
console.log(a);
console.log(b);
// Primitive larda o'zgaruvchilar mustaqil bo'ladi bir biriga bog'lanmaydi bularning qiymati hotirada o'zida saqlanadi

let x = { value: 10 }; // bu joyda x ga value emas uning xotiradagi addresi berilgan
let y = x; // bu joyda y ga ham huddi shunday qilngan
x.value = 20;
console.log(x);
console.log(y); // bular ikkalasi teng chunki bular bitta joydagi hotirada turibdi
// Reference larda qiymatlari objectning o'zida emas boshqa maxsus joyda saqlanadi o'zgaruvchida esa qiymatning joylashgan manzili  yani o'sha qiymatga bo'gan ko'rsatgich saqlanadi shuning uchun ham objectdan nusxa olsak yani x ni y ga berganimizda y ga x ni hotiradagi qiymatiga bo'lgan ko'rsatgich beriladi shundan keyin x ham y ham bitta joydan kelayotgani uchun bir xil bo'lib qoladi qiymatlari

// Primitive lardan nusxa olinganda aynan qiymatidan nusxa olinadi bu narsa byValue deyiladi

// Reference larda esa ularning addresidan nusxa olinadi bu byReference deyiladi objectlarda qiymatni o'zi emas balki xotiradagi addresi saqlanganligi uchun undan nusxa olinganda uning adresidan nusxa olinadi

let number = 1;
function increase(number) {
  number++; // bu bilan tashqaridagi number teng emas buni oshirsak faqat shu 2 bo'ladi tashqaridagi number o'zgarmaydi u 1 qaytaradi. chunki ular primitive typelar xisoblanadi.
  console.log("inside: ", number);
}
increase(number);
console.log("outside ", number);



let obj = { value: 1 };
function increase(obj) {
  obj.value++;
  console.log("inside: ", obj);
}

increase(obj);
console.log("outside: ", obj);
