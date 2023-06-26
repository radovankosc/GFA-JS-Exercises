//Create a Person class with the following fields:

// name: the name of the person
// age: the age of the person (integer number)
// gender: the gender of the person (male / female)
// And the following methods:

// getGoal(): prints 'My goal is: Live for the moment!'
// introduce(): prints 'Hi, I'm name, a age year old gender.'
// And the following constructors:

// Person(name, age, gender)
// Person(): sets name to Jane Doe, age to 30, gender to female
export class Person {
  _name: string;
  _age: number;
  _gender: string;
  constructor(
    name: string = "Jane Doe",
    age: number = 30,
    gender: string = "female"
  ) {
    this._name = name;
    this._age = age;
    this._gender = gender;
  }

  getGoal() {
    console.log("My goal is: Live for the moment!");
  }
  introduce(): void {
    console.log(
      "Hi, I'm " +
        this._name +
        " a " +
        this._age +
        " year old " +
        this._gender +
        "."
    );
  }
}
