import { Student } from "./Student";
import { Teacher } from "./Teacher";
let studentAda = new Student();
let teacherDavid = new Teacher();
console.log(studentAda.learn());
console.log(studentAda.question(teacherDavid));
console.log(teacherDavid.teach(studentAda));
console.log(teacherDavid.giveAnswer());
