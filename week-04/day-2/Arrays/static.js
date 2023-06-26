class Person {
    static species = "Homo Sapiens";
  
    static greet() {
      console.log("Hello, I am a human");
    }
    
    constructor(name) {
      this.name = name;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }

console.log(Person.species); // "Homo Sapiens"
Person.greet(); // "Hello, I am a human

const john = new Person("John");
john.sayHello(); // "Hello, my name is John"

