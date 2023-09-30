// Array methods 2

let first = [1, 2, 3];
let second = [4, 5, 6];

const concatArrays = first.concat(second); // this combine 2 array return new array and immutable
console.log(concatArrays);

const sliced = concatArrays.slice(2); // [ 3, 4, 5, 6 ] extracts from the given index and returns a new array
console.log(sliced);

// Agar objectlar bilan ishlaydigan bo'lsak unda bu methodlar mutable bo'lib qoladi chunki object bo'lsa uning o'ziga emas uning addresini o'zgartiradi

const arr = ["Hello", "Salom", "Hi", "How are you", 5];

for (let item of arr) {
  console.log(item);
}

arr.forEach((item, idx) => {
  // elementni aylanib qaytaradi yangi array qaytarmaydi
  console.log(item, idx);
});
