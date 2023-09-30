// Promise
// Promise deb kelajakda biron qiymat qaytaruvchi objectga aytiladi
// Agar funksiya success bo'lsa bizga qiymatni qaytarib beradi
// Agar bironta hatolik bo'lsa ish vaqtida Promise bizga reasonni qaytarib beradi nima bo'lganini

// Promise 3 xil holatda bo'ladi Pending, Fulfilled with a value, Rejected with a reason

let isBookshopOpen = false;
// Promise
let willIGetNewBook = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if (isBookshopOpen) {
      let book = {
        title: "The BIG book of knowledge",
        author: "Brown Watson",
      };
      resolve(book); // fullfilled
    } else {
      let reason = new Error("Kitob do'koni yopiq");
      reject(reason); // reject
    }
  }, 1500);
});

willIGetNewBook
  .then((result) => console.log(result))
  .catch((error) => console.log(error.message));

// Promise ning ikkita xossasi bo'ladi state bilan result.
// State boshida pending bo'lib turadi
// Result esa undefined bo'ladi

// State keyin fulfilled
// Result keyin value

// State keyin rejected
// Result keyin error
