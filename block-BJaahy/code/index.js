// class Square {
//   constructor(side) {
//     this.width = side;
//     this.height = side;
//   }
//   description() {
//     alert(`The square is ${this.width} x ${this.height}`)
//   }
//   calcArea() {
//     return this.width * this.height
//   }
//   get area() {
//     return this.width * this.height
//   }
//   set area(value) {
//     this.height = Math.sqrt(value)
//     this.width = Math.sqrt(value)
//   }
//   static isEqual(square1, square2) {
//     return square1.calcArea() == square2.calcArea()
//   }
// }
// let s1 = new Square(6);
// let s2 = new Square(6);

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this, lastName = lastName
  }
  get fullName() {
    return this.firstName + ' ' + this.lastName
  }
  set fullName(name) {
    if (name.length > 5) {
      this.firstName = name.split(' ')[0]
      this.lastName = name.split(' ')[1]
    }
    else {
      alert(`not valid`)
    }
  }
  nameContains(str) {
    let fullName = this.firstName + ' ' + this.lastName
    return fullName.includes(str)
  }
}
let u1 = new User(`shivaji`, `vishnoi`)
let u2 = new User(`Nishi`, `vishnoi`)