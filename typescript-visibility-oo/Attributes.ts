export type Attributes<T> = {
  [K in keyof T]: T[K]
}