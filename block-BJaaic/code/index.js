// # Inheritance

// Convert the below requirements into inheritance using prototypal patters.

// #### Animal

// Properties:

// - `location`
// - `numberOfLegs`

// Methods

// - `eat()` - log a message saying `I live in ${location} and I can eat`

// - `changeLocation(newLocation)` - accepts location and updates the location of the animal

// - `summary()` - returns `I live in ${location} and I have ${numberOfLegs}`

// #### Dog

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `color`

// Methods:

// - `bark()` - alerts a message saying `I am ${name} and I can bark 🐶`
// - `changeName(newName)` - accepts the name property and updates the name of the dog
// - `changeColor(newColor)` - accepts the new color and updates the color of the dog
// - `summary()` - returns `I am ${name} and I am of ${color} color. I can also bark`

// #### Cat

// It will have all the properties and methods of the Animal. These are the extra properties and methods these dogs will have.

// Properties:

// - `name`
// - `colorOfEyes`

// Methods:

// - `meow()` - alerts a message saying `I am ${name} and I can do mewo meow 😹`

// - `changeName(newName)` - accepts the name property and updates the name of the dog

// - `changeColorOfEyes(newColor)` - accepts the new color and updates the color of the dog

// - `summary()` - returns `I am ${name} and the color of my eyes are ${colorOfEyes}. I can also do meow meow`

let animalMethods = {
  eat: function () {
    return `I live in ${this.location} and I can eat`
  },
  changeLocation: function (newLocation) {
    this.location = newLocation
  },
  summary: function () {
    return `I live in ${this.location} and I have ${this.numberOfLegs} legs`
  }
}

let dogMethods = {
  bark: function () {
    alert(`I am ${this.name} and I can bark 🐶`)
  },
  changeName: function (newName) {
    this.name = newName;
  },
  changeColor: function (newColor) {
    this.color = newColor
  },
  summary: function () {
    return `I am ${this.name} and I am of ${this.color} color. I can also bark`
  }
}
Object.setPrototypeOf(dogMethods, animalMethods)

let catMethods = {
  meow: function () {
    alert(`I am ${this.name} and I can do mewo meow 😹`)
  },
  changeName: function (newName) {
    this.name = newName
  },
  changeColorOfEyes: function (newColor) {
    this.colorOfEyes = newColor
  },
  summary: function () {
    return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
  }
}

Object.setPrototypeOf(catMethods, animalMethods)

function animal(location, numberOfLegs) {
  let animal = Object.create(animalMethods)
  animal.location = location;
  animal.numberOfLegs = numberOfLegs;
  return animal;
}

function dog(location, numberOfLegs, name, color) {
  let animal = Object.create(dogMethods)
  animal.location = location;
  animal.numberOfLegs = numberOfLegs;
  animal.name = name;
  animal.color = color;
  return animal;
}

function cat(location, numberOfLegs, name, colorOfEyes) {
  let animal = Object.create(catMethods)
  animal.location = location;
  animal.numberOfLegs = numberOfLegs;
  animal.name = name;
  animal.colorOfEyes = colorOfEyes;
  return animal;
}