// type Person = {
//   name: string
//   age: number
//   data: {
//     cpf?: string
//     cnh?: string
//   }
// }

// const p: Person = {
//   name: "Pedro",
//   age: 20,
//   data: {}
// } // data = {} is valid

// ------------------------------

// type Person = {
//   name: string
//   age: number
//   data: Exclude<{
//     cpf?: string
//     cnh?: string
//   }, undefined>
// }

// const p: Person = {
//   name: "Pedro",
//   age: 20,
//   data: {}
// } // data = {} is also valid

// ------------------------------

type Person = {
  name: string
  age: number
  data: { cpf: string } | { cnh: string }
}

const p: Person = {
  name: "Pedro",
  age: 20,
  data: {
    cpf: "123123",
    cnh: "123123"
  }
}