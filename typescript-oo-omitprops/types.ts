// type OmitTypes<T, Omitted> = {
//   [K in keyof T]: T[K] extends Omitted ? never : T[K]
// }[keyof T]

// type MyType = {
//   a1: string;
//   a2: string;
//   a3: number;
//   a4: Function;
//   a5: string;
//   a6: number;
//   a7: number;
// }

// type OmitStringProperties = Omit<MyType, string>;

// const t: OmitStringProperties = {
//   a1: "Hi",
//   a2: "How",
//   a3: 3,
//   a4: (x: number) => 2 * x,
//   a5: "Are",
//   a6: 1,
//   a7: 1
// }

// type GetStringProperties<T> = {
//   [K in keyof T]: T[K] extends string ? undefined : Pick<T, K>
// }[keyof T]

// type Client = {
//   id: string;
//   name: string;
//   age: number;
// }

// const p: GetStringProperties<Client> = {
//   age: 20
// }

type OmitType<T, Omitted> = {
  [K in keyof T]: T[K] extends Omitted ? undefined : Pick<T, K>
}[keyof T]

type MyPerson = {
  id: string;
  name: string;
  age: number;
  cpf: string;
}

const age: OmitType<MyPerson, string> = {
  age: 10
} // Only age allowed
