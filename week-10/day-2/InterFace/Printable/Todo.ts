import { Printable } from "./Printable";

export class Todo implements Printable {
  _task: string;
  _priority: string;
  _done: boolean;
  constructor(task: string, priority: string, done: boolean) {
    this._task = task;
    this._priority = priority;
    this._done = done;
  }
  printAllFields(): void {
    console.log(
      "Task: " +
        this._task +
        " | Priority: " +
        this._priority +
        " | Done: " +
        this._done
    );
  }
}
