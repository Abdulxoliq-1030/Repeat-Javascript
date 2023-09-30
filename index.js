let numbers = [2, -3, 5, 1 - 4];
let filtered = numbers.filter((number) => number >= 0); // yangi array qaytaradi

// const items = filtered.map((number) => `<li>${number}</li>`);
// let html = `<ul>
// ${items.join("")}
// </ul>`;

let items = filtered.map((number) => {
  return { value: number };
}); // yangi array qaytaradi

console.log(items);
