type t1 = {
  prop1: string;
  prop2: string;
  prop3: string;
}
type t2 = {
  prop1: string;
  prop2: string;
  prop3: string;
  prop4?: string;
}

function receiveObject(o: t1) {
  return o
}

const o1 = {
  prop1: ".",
  prop2: ".",
  prop3: "."
}
const o2: t1 = {
  prop1: ".",
  prop2: ".",
  prop3: ".",
  prop4: "."
}

const value: t1 = o2

const val = receiveObject(o2)




