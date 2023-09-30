const circle = {
  radius: 1,
  draw() {
    console.log("doira");
  },
};

// const clone = {};

// for (let key in circle) clone[key] = circle[key];

// const clone = Object.assign({ color: "white" }, circle);

const clone = { ...circle };

console.log(clone);
