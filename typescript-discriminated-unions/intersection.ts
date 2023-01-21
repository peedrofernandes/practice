// type T1 = {
//   prop1: string
// }

// type T2 = {
//   prop1: string
// }

// type T3 = T1 & T2
// // T3 = { prop1: string }

// const myObj: T3 = {
//   prop1: "Pedro"
// }
// // Ok

// ------------------------------------

// type T = { prop1: string } & { prop1: string }
// // T = { prop1: string } & { prop1: string } (sem simplificação)

// const myObj: T = {
//   prop1: "Pedro"
// }
// // Ok

// ------------------------------------

// type T1 = {
//   prop1: string;
//   prop2: string;
// }

// type T2 = {
//   prop2: string;
//   prop3: string;
// }

// type T3 = T1["prop1"] & T2["prop2"]
// // T3 == string

// ------------------------------------

// type T1 = {
//   prop1: number;
//   prop2: string;
// }

// type T2 = {
//   prop2: string;
//   prop3: string;
// }

// type T3 = T1["prop1"] & T2["prop2"]
// // T3 == never

// ------------------------------------

type T1 = {
  prop1: number;
  prop2: string;
}

type T2 = {
  prop1: number;
  prop2: string;
} // Igual à T1

type T3 = Exclude<T1, "prop1">
// T3 == Pick<T1, "prop1"> & Pick<T1, "prop2"> (Sem simplificação)

const myObj: T3 = {
  prop1: 20,
  prop2: "Pedro"
}

