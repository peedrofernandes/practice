import React from "react"
import ReactDOM from "react-dom"

const meuNome = "Maria";

ReactDOM.render(
  <div>Olá! Meu nome é {meuNome}</div>,
  document.querySelector("#app")
)

console.log("Funcionou tudo junto!")