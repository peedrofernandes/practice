const mutableArray = []
const immutableArray = []

let start, end, elapsed
start = new Date().getTime()
for (let i = 0; i < 100000000; i++) {
  mutableArray.push(i);
}
end = new Date().getTime()
elapsed = end - start
console.log(`MutableArray time elapsed: ${elapsed}`)

start = new Date().getTime()
for (let i = 0; i < 100000000; i++) {
  imutableArray = [ ...immutableArray, i ]
}
end = new Date().getTime()
elapsed = end - start
console.log(`ImutableArray time elapsed: ${elapsed}`)