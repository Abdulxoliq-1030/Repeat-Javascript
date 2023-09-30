// Array methods

let numbers = [3, 4];
numbers.push(5, 6); // mutable arrayni oxiriga qo'shadi yangi element
numbers.unshift(1); // mutable arrayni boshiga qo'shadi yangi element
numbers.splice(1, 0, 2); // mutable 1 start, 0 delete count, 2 beeing placed

let number = numbers.pop(); // oxiridagi elementni o'chiradi
console.log("Number: ", number); // 6 Oxiridagi elementni o'chirib tashlaydi va o'sha o'chirilgan raqamni qaytaradi mutable bu ham
console.log("Numbers: ", numbers);
let first = numbers.shift(); // boshidagi elementni o'chiradi

console.log("First Number: ", first); // 1 boshidagi elementni o'chirib tashlaydi va arrayni o'zgartiradi

numbers.splice(2, 1); // orasidagi elementni o'chiradi
console.log("Numberss: ", numbers); // [2,4,5] orasidagi elementni o'chiradi

console.log(numbers.indexOf(3)); // 2 return index number
// If we give a non-existent number, it will return -1

console.log(numbers.includes(3)); // true

console.log(numbers);

const laptops = [
  { id: 1, cpu: "i5", ram: "8gb", hdd: "500gb" },
  { id: 2, cpu: "i7", ram: "16gb", hdd: "1tb" },
  { id: 3, cpu: "i9", ram: "32gb", hdd: "2tb" },
];

let laptop = laptops.find((laptop) => laptop.cpu === "i9");

console.log(laptop);
