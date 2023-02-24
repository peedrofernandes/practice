type DeepPartial<T> = T extends object ? {
  [K in keyof T]?: DeepPartial<T[K]>
} : T

type MyObject = {
  id: string;
  name: string;
  variables: {
      id: string;
      name: string;
      arr: [number, number, string, string],
      obj: {
          id: string;
          name: string
      }
  };
  email: string;
};

const values: DeepPartial<MyObject> = {
  variables: {
    arr: [1, 2, , "2"]
  }
}
