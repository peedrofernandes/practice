# Aplicação REACT com TypeScript sem Create-React-APP

### Objetivo

Essa pequena aplicação no estilo "Olá mundo" tem como objetivo praticar a configuração inicial de projetos React utilizando configurações do WebPack e Babel manualmente, em vez de usar a ferramenta **create-react-app**.

### Passo a passo

1. Instalar os pacotes e tipos do react: `npm i react react-dom @types/react @types/react-dom`
2. Instalar o TypeScript: `npm install --save-dev typescript`
3. Instalar os pacotes do webpack: `npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader`
4. Instalar os pacotes do babel: `npm install --save-dev @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript`
5. Criar o arquivo de configuração `webpack.config.js`:

```js
const path = require("path")
const HtmlWebpackPlugin = require("HtmlWebpackPlugin")

module.exports = {
  resolve: {
    extensions: ["ts", "tsx", "js", "jsx"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  }, // Output do processamento do webpack
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)/,
        use: ["babel-loader"],
        exclude: /node_modules/
      } // Deve usar o babel para arquivos .ts, .tsx, .js e .jsx
    ]
  },
  devServer: { port: 3000 },
  plugins: [ new HtmlWebpackPlugin({ template: "./src/index.html" })] // Fazer o app mostrar o index.html na tela
}
```

6. Criar um arquivo `tsconfig.json` com as configurações do TypeScript:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "sourceMap": true,
    "outDir": "dist",
    "strict": "true",
    "jsx": "react"
  },
  "include": ["src"]
}
```

7. Criar um arquivo de configuração do babel `.babelrc`:

```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ]
}
```

8. Colocar os scripts no package.json:

```json
{
// ...
  "scripts": {
    "dev": "webpack serve --mode development",
    "build": "webpack --mode production"
  }
// ...
}
```

