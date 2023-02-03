type OptionalTuple<T> = {
  [K in keyof T]?: T[K]
}

type MyTuple = [number, string, number];

const Optional: OptionalTuple<MyTuple> = [1, , 1];

console.log(Optional.length);

