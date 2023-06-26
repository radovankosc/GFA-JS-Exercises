// learn() -> prints: the student is actually learning
// question(teacher) -> calls the teacher's giveAnswer() method
import { Teacher } from "./Teacher";
export class Student {
  // learn(){
  //     console.log("The student is learning!")
  // }
  learn(): string {
    return "The student is learning!";
  }

  question(teacher: Teacher): string {
    return teacher.giveAnswer();
  }
}
