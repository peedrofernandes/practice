import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Spinner from './components/Spinner'
import Box from './components/boxes/Box';

function App() {
  const [size, setSize] = useState<number>(400);

  const [variant, setVariant] = useState<"red" | "blue" | "yellow">("blue")

  return (
    <div className="App">
      <Box variant={variant} />
      <button type="button" onClick={() => setVariant("yellow")}>Yellow</button>
      <button type="button" onClick={() => setVariant("red")}>Red</button>
      <button type="button" onClick={() => setVariant("blue")}>Blue</button>
    </div>
  )
}

export default App
