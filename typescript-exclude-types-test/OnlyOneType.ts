// type PA = {
//   name: string;
//   age: 20;
//   phone: number
// }

// type PB = {
//   name: string;
//   age: number;
//   email: string;
// }

// type P = PA & PB;

// const ps: P = {
//   name: "Pedro",
//   age: 20,
//   phone: 123,
//   email: "123"
// } // Accepts only every parameter (AND operator)

// // ------------------------------------

// type PA = {
//   name: string;
//   age: 20;
//   phone: number
// }

// type PB = {
//   name: string;
//   age: number;
//   email: string;
// }

// type P = PA | PB;

// const psa: P = {
//   name: "Pedro",
//   age: 20,
//   phone: 123,
//   email: "123123"
// } // Accepts either PA or PB or both (OR operator)

// // ------------------------------------


type PA = { name: string } | { nickname: string }

const ps: PA = {
  name: "Pedro",
  nickname: "123"
}