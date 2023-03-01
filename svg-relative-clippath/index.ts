import readline from "readline"

async function input(prompt: string): Promise<string> {
  const inputSource = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  return new Promise(resolve => {
    inputSource.question(prompt, (name) => {
      resolve(name)
      inputSource.close()
    })
  })
}

function isNumber(value: unknown): boolean {
  if (typeof value === "string" && /^\s*$/.test(value))
    return false
  return !isNaN(value as any)
}

function getMax(value: string): number {
  const splitted = value.split(/(\s|M|C)/)
  let max: number | undefined

  splitted.forEach(item => {
    if (isNumber(item)) {
      if (!max || Number(item) > max)
        max = Number(item)
    }
  })

  if (!max)
    max = 0

  return max
}

function convertValues(values: string): string {
  const max = getMax(values)
  if (max === 0) return values
  const splitted = values.split(/(\s|M|C)/)
  const newValues = splitted.map(item => {
    if (!isNumber(item)) return item
    return (Number(item) / max).toFixed(6)
  })
  return newValues.join("")
}

function revertValues(values: string, max: number): string {
  const splitted = values.split(/(\s|M|C)/)
  const newValues = splitted.map(item => {
    if (!isNumber(item)) return item
    return (Number(item) * max).toFixed(6)
  })
  return newValues.join("")
}

function transformValues(values: string, offset: [number, number]): string {
  const splitted = values.split(/(\s|M|C)/)
  let current: "x" | "y" = "x"
  const newValues = splitted.map(item => {
    if (!isNumber(item)) return item
    if (current === "x") {
      current = "y"
      return (Number(item) + offset[0]).toFixed(6)
    }
    else {
      current = "x"
      return (Number(item) + offset[1]).toFixed(6)
    }
  })
  return newValues.join("")
}

async function main() {
  let op: number

  do {
    console.log("Opções: ")
    console.log("[1] Converter valores absolutos em relativos;")
    console.log("[2] Reverter valores relativos em absolutos;")
    console.log("[3] Realizar translação nos valores;")
    op = Number(await input("Sua opção: "))

    switch (op) {
      case 1: {
        const values = await input("Digite os valores absolutos: ")
        console.log(`Valor máximo encontrado: ${getMax(values)}`)
        console.log(`Valores relativos: ${convertValues(values)}`)
        break
      }
      case 2: {
        const values = await input("Digite os valores relativos: ")
        const max = Number(await input("Digite o valor máximo absoluto: "))
        console.log(`Valores absolutos: ${revertValues(values, max)}`)
        break
      }
      case 3: {
        const values = await input("Digite os valores sem translação: ")
        const offset = await input("Digite os valores da translação, separados por um espaço em branco: ")
        const [offX, offY] = offset.split(" ").map(item => Number(item))
        console.log(`Valores transformados: ${transformValues(values, [offX, offY])}`)
        break
      }
      default: {
        console.log("Opção inválida, tente novamente!")
        break
      }
    }
  } while (op !== 0)
  console.log("Encerrando processo")
}

main()
