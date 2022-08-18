class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender
  }
  eat() {
    return `${this.name} eats`
  }
  sleep() {
    return `${this.name} sleeps`
  }
  walk() {
    return `${this.name} walks`
  }
}

class Player extends Person {
  constructor(name, age, gender, sportsName) {
    super(name, age, gender);
    this.sportsName = sportsName
  }
  play() {
    return `${this.name} plays ${this.sportsName}`
  }
}

class Cricketer extends Player {
  constructor(name, age, gender, sportsName, teamName) {
    super(name, age, gender);
    this.teamName = teamName;
    this.sportsName = sportsName;
  }
  playCricket() {
    return `${this.name} plays ${this.gender} cricket from ${this.teamName}`
  }
}

class Teacher extends Person {
  constructor(name, age, gender, instituteName) {
    super(name, age, gender);
    this.instituteName = instituteName
  }
  teach() {
    return `${this.name} is a ${this.gender} teacher in ${this.instituteName}`
  }
}

class Artist extends Person {
  constructor(name, age, gender, kind) {
    super(name, age, gender);
    this.kind = kind;
  }
  createArt() {
    return `${this.name} is ${this.age} old and  creates ${this.kind} art`
  }
}

let sachin = new Cricketer(`Sachin`, 45, `male`, `cricket`, `India`)
sachin.playCricket()
sachin.eat()
sachin.play()


let rajaram = new Artist(`rajaram`, 34, `male`, `painting`)
rajaram.walk()
rajaram.createArt()