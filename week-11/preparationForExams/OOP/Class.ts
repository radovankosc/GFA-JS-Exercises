export abstract class Parent {
  _age: number = 5; // if not specified, we have to add it to constructor and make this._age = age from constructor
  _name: string = "adela";

  add1() {
    //if it is not abstract then child class inherites, not has to be written in child and can be overrided
    console.log("aaa");
  }
  abstract add2(): {}; //is is abstract method in abstract class, we have to implement it in child
}

class CHILD extends Parent {
  add2(): {} {
    throw new Error("Method not implemented.");
  }

  // add1(): void {
  //   console.log("bbbbb");
  // }
  get(): number {
    return this._age;
  }
}

let ch = new CHILD();
console.log(ch._name);

ch.add1();
console.log(ch.get());
