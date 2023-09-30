let numbers = [7, 3, 5, 8];
//
// let sum = 0;

// for (let number of numbers) sum += number; // arraydagi barcha qiymatlarni qo'shib beradi

const sum = numbers.reduce((acc, currentVal) => {
  return acc + currentVal;
}, 0);

console.log(sum);
