import { Domino } from "./Domino";
import { Todo } from "./Todo";
let domino1: Domino = new Domino(3, 2);
let domino2: Domino = new Domino(2, 5);
let dominoes: Domino[] = [domino1, domino2];

let todo1: Todo = new Todo("Buy milk", "high", true);
let todos: Todo[] = [todo1];

for (let domino of dominoes) {
  domino.printAllFields();
}

for (let todo of todos) {
  todo.printAllFields();
}
