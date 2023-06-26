// Create a Cohort class that has the following

// fields:
// name: the name of the cohort
// students: a list of Students
// mentors: a list of Mentors
// methods:
// addStudent(Student): adds the given Student to students list
// addMentor(Mentor): adds the given Mentor to mentors list
// info(): prints 'The name cohort has size of students students and size of mentors mentors.'
// The Cohort class has the following constructors:

// Cohort(name): beside the given parameter it sets students and mentors as empty lists
import { Mentor } from "./Mentor";
import { Sponsor } from "./Sponsor";
import { Student } from "./Student";
export class Cohort {
  _name: string;
  _listOfStudents: Student[];
  _listOfMenthors: Mentor[];
  constructor(name: string) {
    this._name = name;
    this._listOfStudents = []; // = beside the given parameter it sets students and mentors as empty lists
    this._listOfMenthors = [];
  }
  addStudent(student: Student): Student[] {
    this._listOfStudents.push(student);
    return this._listOfStudents;
  }
  addMentor(mentor: Mentor): Mentor[] {
    this._listOfMenthors.push(mentor);
    return this._listOfMenthors;
  }
  info(): void {
    console.log(
      "The " +
        this._name +
        " cohort has " +
        this._listOfStudents.length +
        " students and " +
        this._listOfMenthors.length +
        " mentors."
    );
  }
}
