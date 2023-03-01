function input(prompt) {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  })
  return new Promise(resolve => {
    readline.question(prompt, (name) => {
      resolve(name)
      readline.close()
    })
  })
}

function isNumber(value) {
  if (/^\s*$/.test(value)) return false
  else return !isNaN(value)
}

async function main() {
  const values = await input("Paste your values here: ")
  const matrix = await input("Paste your matrix values, sepparated by a white space: ")
  const dx = matrix.split(" ")[0]
  const dy = matrix.split(" ")[1]

  // const parsedValues = values.split(/[\sMC]/)
  const parsedValues = values.split(/(\s|M|C)/)
  console.log(parsedValues)

  let current = "x"
  const convertedValues = parsedValues.map((v) => {
    if (!isNumber(v)) return v
    if (current === "x") {
      current = "y"
      return (Number(v) + Number(dx)).toFixed(1)
    }
    else {
      current = "x"
      return (Number(v) + Number(dy)).toFixed(1)
    }
  }).join("")
  
  console.log(`Converted values: ${convertedValues}`)
  // console.log("Converted values: " + convertedValues.join(""))
}

main()