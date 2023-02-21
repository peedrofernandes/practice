function createCounter() {
  let counter = 0

  function add() {
    counter++
    console.log(`Added! Counter = ${counter}`)
  }
  return add
}

const add = createCounter()

add()
add()
add()
add()
add()