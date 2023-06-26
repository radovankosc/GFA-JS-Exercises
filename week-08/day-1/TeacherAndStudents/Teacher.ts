import { Student } from "./Student";
export class Teacher {
  teach(student: Student): string {
    return student.learn();
  }
  giveAnswer(): string {
    return "The teacher is answering a question";
  }
}
