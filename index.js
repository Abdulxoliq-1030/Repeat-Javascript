function add(a, b, callback) {
  console.log(`${a} va ${b} larning yig'indisi ${a + b}`);
  callback();
}

function display() {
  console.log(`Bu qator qo'shuvdan keyin chiqadi.`);
}

add(3, 4, display);
