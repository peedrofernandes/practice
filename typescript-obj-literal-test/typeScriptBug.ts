type CounterState = {
  counter: number;
}

type Reducer = () => CounterState

const state: CounterState = {
  counter: 1,
  foo: "bar"
}

const reducer1: Reducer = () => ({
  counter: 1,
  foo: 'bar' // no errors, why?
})

const reducer2: Reducer = (): CounterState => ({
  counter: 1,
  foo: 'bar' // error: Object literal may only specify known properties
})