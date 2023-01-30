// export type Attributes<T> = NonNullable<{
//   [K in keyof T]: T[K] extends Function ? null : Pick<T, K>[K]
// }>

// type Attributes<T> = Omit<T, keyof T & 'id'> & { [K in keyof T]: T[K] extends Function ? never : T[K] };

type TT = {
  id: number | string;
  a1: string;
  a2: number;
  a3: string;
};

type GetKeysWithout<T, U> = {
  [K in keyof T]: T[K] extends U ? never : K
}[keyof T]

type Attributes<T> = {
  [K in Exclude<GetKeysWithout<T, Function>, "id">]: T[K]
}



class MyClass {
  private _id: string;
  private _attr1: string;
  private _attr2: number;
  private _attr3: string;

  constructor(
    id: string,
    a: string,
    b: number,
    c: string
  ) {
    this._id = id;
    this._attr1 = a;
    this._attr2 = b;
    this._attr3 = c;
  }

  showAttributes() {
    console.log(`${this._attr1} - ${this._attr2} - ${this._attr3}`);
  }

  get id() {
    return this._id;
  }
  get attr1() {
    return this._attr1;
  }
  get attr2() {
    return this._attr2;
  }
  get attr3() {
    return this._attr3;
  }
}

type MyObject = {
  id: string;
  attr1: number;
  attr2: string;
  attr3: number;
  showAttributes: () => void;
}


type y = Attributes<MyClass>

const p: y = {
  
} 