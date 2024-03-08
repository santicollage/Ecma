//declarando
class User {};

//instancia de una clase
const newUser = new User();

class user {
  //metodos
  greeting() {
    return 'Hello';
  }
};

const santi = new user();
console.log(santi.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

//constructor
class user {
  constructor() {
    console.log('Nuevo Usuario')
  }
  greeting() {
    return 'Hello';
  }
}

const david = new user();

//this
class user {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const ana = new user('Ana');
console.log(ana.greeting());

//setters getters
class user {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get uAge() {
    return this.age;
  }
  set uAge(n){
    this.age = n;
  }
}

const santi1 = new user('Santiago', 15);
console.log(santi1.uAge);
console.log(santi1.uAge = 20);