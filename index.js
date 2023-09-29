// while and do while
let i = 7;

while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
} // bunda shart loop boshlanishidan oldin tekshiriladi

let j = 0;
do {
  if (j % 2 !== 0) console.log(j);
  j++; // infinity loop if we remove this item
} while (j <= 5); // avval kod birmarta ishga tushadi keyin shart bajariladi
