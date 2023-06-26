// Create Counter class
// which has a counter (integer) field
// at creation it should have a default value 0
// there are two ways to create the class:
// with 0 input parameters
// with 1 input parameter called counter which is set as the initial value of the counter field
// we can add another whole number to this counter: add(number)
// we can just increase the counter's value by one: add() (no parameters)
// we can get() the current counter value
// and we can reset() the counter to the initial value set during the construction of the class
// use export Counter at the end of your file
export class Counter {
  _counter: number;
  _initialValue: number;
  constructor(counter: number = 0) {
    this._counter = counter;
    this._initialValue = counter;
  }
  add(addNum: number = 1): number {
    return (this._counter += addNum);
  }
  increase(): number {
    return ++this._counter;
  }
  get(): number {
    return this._counter;
  }
  reset() {
    this._counter = this._initialValue; // default value, because initialValue is at the beginning = counter, it means = 0,
  }
}
let myNum = new Counter(50);
console.log(myNum.add(5));
console.log(myNum.increase());
