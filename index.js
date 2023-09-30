// let numbers = [2, 3, 5, 1, 4];

// const isAllPositive = numbers.every((number) => {
//   return number >= 0;
// });

// console.log(isAllPositive);

// let numbers2 = [2, 3, 5, 1, 4];

// const atLeastOnePositive = numbers.some((number) => {
//   return number >= 0;
// });

// console.log(atLeastOnePositive);

let numbers = [2, 3, -5, 1, 4];

let filtered = numbers.filter((number) => {
  return number >= 0;
}); // yangi array qaytaradi

console.log(filtered);
