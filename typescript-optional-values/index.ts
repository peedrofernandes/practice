type KeysWithoutFunction<T> = {
  [K in keyof T]: T[K] extends Function ? never : K
}[keyof T];

type Values<T> = {
  [K in Exclude<KeysWithoutFunction<T>, "id">]: T[K]
};

type Person = {
  id: string;
  name: string;
  age: number;
  email?: string;
  bio: Text | undefined;
}

type Keys = KeysWithoutFunction<Person>;
type TypeOfBio = Person["bio"];

const person: Person = {
  id: "1",
  name: "Pedro",
  age: 20
} // requires optional properties

const personValues: Values<Person> = {
  
}