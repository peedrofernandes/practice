type Person = {
  name: string;
  age: number;
  height: number;
  weight: number;
}

type OnlyOne<T, U = {
  [K1 in keyof T]: { 
    [K2 in keyof T]?: Pick<T, K1> extends Pick<T, K2> ? T[K1] : undefined
  }
}> = U[keyof U]

const person: OnlyOne<Person> = {
  // name: "Pedro",
  age: 20,
}

/*
type U = {
  name: {
    name: string;
    age?: undefined;
    height?: undefined;
    weight?: undefined;
  };
  age: {
    name?: undefined;
    age: number;
    ...
  };
  ...
}

*/

type PersonWithOnlyOneAttribute = {
  name: string;
  age?: undefined;
  height?: undefined;
  weight?: undefined;
} | {
  name?: undefined;
  age: number;
  height?: undefined;
  weight?: undefined;
} | {
  name?: undefined;
  age?: undefined;
  height: number;
  weight?: undefined;
} | {
  name?: undefined;
  age?: undefined;
  height?: undefined;
  weight: number;
}

const p: PersonWithOnlyOneAttribute = {
  // name: "Pedro",
  // age: 20,
  weight: 80,
  // height: 1.86
}
 

