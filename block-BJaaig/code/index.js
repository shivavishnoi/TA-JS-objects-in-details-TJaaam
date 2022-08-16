// ## Find the output

// For the give code below write the output / error along with the reason!


let user = {
  username: 'John',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};

let user2 = {
  username: 'Arya',
  sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  },
};
let user3 = {
  username: 'Bran',
};

function MainUser() {
  this.username = 'Tyrion';
  this.sayHello = function sayHello(message = 'Hello') {
    console.log(message + ' ' + this.username);
  };
}

let userSayHello = user.sayHello;

console.log(user.sayHello()); // output /  hello john
console.log(user2.sayHello()); // output /  hello arya
console.log(user.sayHello.call(user2)); // output /  hello arya
console.log(user.sayHello.call(user2, 'Hey')); // output / hey arya
console.log(user.sayHello.apply(user2, ['Hey'])); // output / hey arya
console.log(typeof user.sayHello.bind(user2)); // output / function
console.log(user.sayHello.bind(user2)()); // output /hello arya
console.log(userSayHello()); // output / hello undefined
console.log(typeof userSayHello.bind(user2)); // output / function
console.log(userSayHello.bind(user2)()); // output / hello arya
//console.log(user3.sayHello()); // TypeError: user3.sayHello is not a function / error
console.log(userSayHello.apply(user3)); // output / hello bran
console.log(userSayHello.call(user3)); // output / hello bran
console.log(typeof new MainUser()); // output / object
// console.log(typeof new MainUser()); // output / error
console.log(new MainUser().sayHello()); // output / hello tyrion
console.log(new MainUser().sayHello.call(user2)); // output / hello arya
console.log(new MainUser().sayHello.call(user)); // output / hello john
console.log(
  new MainUser().sayHello.apply(user, ['Welcome!'])
); // output / welcome john

