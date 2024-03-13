class user {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  #speak() {
    return 'Hello';
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }

  get #uAge() {
    return this.age;
  }
  set #uAge(n){
    this.age = n;
  }
}

const santi1 = new user('Santiago', 15);
console.log(santi1.uAge);
console.log(santi1.uAge = 20);