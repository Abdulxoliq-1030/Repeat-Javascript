let person = {
  firstName: "Abdulla",
  lastName: "Qodiriy",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(value) {
    let fullNameArray = value.split(" "); // [] qaytaradi
    this.firstName = fullNameArray[0];
    this.lastName = fullNameArray[1];
  },
};
person.fullName = "Alisher Navoiy";
console.log(person);

// getter objectni xossasini o'qib olish uchun
// setter objectni xossasiga qiymat berish uchun ishlatiladi
