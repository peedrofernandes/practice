export type KeysWithFunction<T> = {
  [K in keyof T]: T[K] extends Function ? K : never
}[keyof T]

type Values<T> = Omit<T, "id" | KeysWithFunction<T>>

class Person {
  private _id: string;
  private _name: string;
  private _age?: number;
  private _email?: string;

  constructor(props: { id: string, name: string });
  constructor(props: { id: string, name: string, age: number })
  constructor(props: { id: string, name: string, email: string })
  constructor(props: { id: string, name: string, age: number, email: string })

  constructor (props: {
      id: string,
      name: string,
      age?: number,
      email?: string
  }
  ) {
      this._id = props.id;
      this._name = props.name;

      if (props.age)
          this._age = props.age;
      if (props.email)
          this._email = props.email;
  }

  greet() {
      console.log(`Hello, my name is ${this._name} and I'm ${this._age} years old!`);
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
  get email() {
      return this._email;
  }
}

type PersonType = {
  id: string;
  name: string;
  age?: number;
  email?: string
}

const values: Values<PersonType> = {

}