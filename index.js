async function getCustomerName() {
  let name = await "Ibrohim";
  console.log(name);
  return name;
}

// getCustomerName().then((data) => console.log(data));
console.log(1); // 1
getCustomerName(); // 3
console.log(2); // 2
