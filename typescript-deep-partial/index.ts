// type DeepPartial<T> = {
//   [K in keyof T]?: T[K] extends Array<infer U>
//   ? Array<DeepPartial<U>>
//   : T[K] extends object
//   ? DeepPartial<T[K]>
//   : T[K] | undefined
// }

// type DeepPartial<T> =
//   T extends Array<infer U>
//   ? [K in keyof T]: T[K]
//   : T extends object
//   ? { [K in keyof T]?: DeepPartial<T[K]> }
//   : Partial<T>;

export type DeepPartial<T> =
  T extends object
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : T

type MyType = {
  id: string;
  name: string;
  properties: {
    prop1: number;
    prop2?: Text;
    prop3: string;
  }
  email: string;
  array: [number, number, string],
  composeArray: [number, string, {
    integer: number,
    float: number
  }]
}


const values: DeepPartial<MyType> = {
  id: "string",
  array: [1, , "o"],
  composeArray: [, , {
    integer: 1
  }]
}

type MyArray = [number, number, string]
type keys = MyArray[keyof MyArray]

const optionals: Partial<MyArray> = [
  1, undefined, "oi"
]

type ArrToObj<T> = {
  [K in keyof T]: T[K]
}

const arr