class Person {
  private _id: string | number;
  private _name: string;
  private _age: number;

  constructor(id: string | number, name: string, age: number) {
    this._id = id;
    this._name = name;
    this._age = age;
  }

  greet() {
    console.log("Hello, my name is " + this._name + "!");
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

type PersonAttributes = Omit<Person, "id">

// const p: PersonAttributes = {
//   _name: "Pedro",
//   _age: 20,
//   greet() {
//     console.log("Hi!");
//   }
// } // Syntax error: The true properties are those defined in the getters.

// const p: PersonAttributes = {
//   name: "Pedro",
//   age: 20,
//   greet() {
//     console.log("Hi!");
//   }
// } // Correct syntax

