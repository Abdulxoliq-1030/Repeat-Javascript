let numbers = arrayFromRange(1, 5);
console.log(numbers);

function arrayFromRange(min, max) {
  let result = [];

  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}
