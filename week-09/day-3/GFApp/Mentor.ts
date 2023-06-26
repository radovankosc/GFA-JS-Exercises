// Create a Mentor class that has the same fields and methods as the Person class, and has the following additional

// fields:
// level: the level of the mentor (junior / intermediate / senior)
// methods:
// getGoal(): prints 'My goal is: Educate brilliant junior software developers.'
// introduce(): prints 'Hi, I'm name, a age year old gender level mentor.'
// The Mentor class has the following constructors:

// Mentor(name, age, gender, level)
// Mentor(): sets name to Jane Doe, age to 30, gender to female, level to intermediate
import { Person } from "./Person";
export class Mentor extends Person {
  _level: string;
  constructor(
    name: string = "Jane Doe",
    age: number = 30,
    gender: string = "female",
    level: string = "itermediate"
  ) {
    super(name, age, gender);
    this._level = level;
  }
  getGoal(): void {
    console.log("My goal is: Educate brilliant junior software developers.");
  }
  introduce(): void {
    console.log(
      "Hi, I'm " +
        this._name +
        " a " +
        this._age +
        " year old " +
        this._gender +
        " " +
        this._level +
        " mentor."
    );
  }
}
