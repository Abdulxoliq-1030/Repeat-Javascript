// This method ichida ishlatilsa this o'sha method turgan objectni ifodalaydi agar tashqarida tursa u global objectni ifodalaydi
function Game(title) {
  this.title = title;
  console.log(this);
}

const roblox = new Game("roblox");

// If this create a new object,this express a new object

const game = {
  title: "needforspeed",
  cars: ["ferrari", "lamborghini", "porsche", "bmw"],
  showCars() {
    this.cars.forEach((car) => {
      console.log(this.title, car);
    });
  },
};

game.showCars();
