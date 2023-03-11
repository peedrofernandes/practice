const express = require("express")

const app = express()

let connections = []

const LIMIT = 20
const DELAY = 1000 // ms

app.get("/date", (req, res, next) => {
  // res.setHeader("content-type", "application/json")
  res.setHeader("content-type", "text/html/ charset=utf-8 ")
  res.setHeader("transfer-encoding", "chunked")

  connections.push(res)
})

let tick = 0

// setInterval(() => {
//   const update = Math.abs((Math.floor(Math.random() * 100)) % 10)

//   console.log(`(Server) - Updated client with number ${update}`)
//   connections.forEach(con => con.write(`Update from server: ${update}`))
// }, 1000)

function runUpdates() {
  const update = Math.abs((Math.floor(Math.random() * 100)) % 10)

  console.log(`(Server) - Updated client with number ${update}`)
  connections.forEach(con => con.json(`Update from server: ${update}\n`))

  setTimeout(runUpdates, 1000)
}

setTimeout(runUpdates, 1000)

// setTimeout(function run() { 
//   console.log(tick)
//   if (++tick > LIMIT) {
//     connections.forEach(con => {
//       con.write("END\n")
//       con.end()
//     })
//     connections = []
//     tick = 0
//   }
//   connections.forEach((con, i) => {
//     con.write(`Hello, ${i}! Tick: ${tick}\n`)
//   })
//   setTimeout(run, DELAY)
// }, DELAY)

app.listen(3001, () => console.log("Server running on 3001!"))