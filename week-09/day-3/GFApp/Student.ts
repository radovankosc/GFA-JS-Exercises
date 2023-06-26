// Create a Student class that has the same fields and methods as the Person class, and has the following additional

// fields:
// previousOrganization: the name of the student’s previous company / school
// skipDays: the number of days skipped from the course
// methods:
// getGoal(): prints 'My goal is: Be a junior software developer.'
// introduce(): prints 'Hi, I'm name, a age year old gender from previousOrganization who skipped skipDays days from the course already.'
// skipDays(numberOfDays): increases skipDays by numberOfDays
// The Student class has the following constructors:

// Student(name, age, gender, previousOrganization): beside the given parameters, it sets skipDays to 0
// Student(): sets name to Jane Doe, age to 30, gender to female, previousOrganization to The School of Life, skipDays to 0
import { Person } from "./Person";
export class Student extends Person {
  _previousOrganization: string;
  _skipDays: number;
  constructor(
    name: string = "Jane Doe",
    age: number = 30,
    gender: string = "female",
    previousOrganization: string = "The School of Life"
  ) {
    super(name, age, gender);
    this._previousOrganization = previousOrganization;
    this._skipDays = 0;
  }
  getGoal(): void {
    console.log("My goal is: Be a junior software developer.");
  }
  introduce(): void {
    console.log(
      "Hi, I'm " +
        this._name +
        " name, a " +
        this._age +
        " year old " +
        this._gender +
        " from " +
        this._previousOrganization +
        " who skipped " +
        this._skipDays +
        " days from the course already."
    );
  }
  skipDays(numberOfDays: number): number {
    this._skipDays += numberOfDays;
    return this._skipDays;
  }
}
