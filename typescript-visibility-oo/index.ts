import { Attributes } from "./Attributes";
import { Values } from "./Values";

class Person {
  constructor(
    private _id: string,
    private _name: string,
    private _age: number
  ) { }

  public greet() {
    console.log(`Hi, my name is ${this._name} and I have ${this._age} years old!`)
  }

  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
}

// const p = new Person("1", "Pedro", 20);
// console.log(p);

// const jsonifiedPerson = JSON.parse(JSON.stringify(p));
// console.log(jsonifiedPerson);

// const attributes: Attributes<Person> = {
  
// }

const p = new Person("1", "Pedro", 20);

const values: Values<Person> = {
  name: "Pedro",
  age: 20
}