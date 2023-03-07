import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Playground, { Refs } from './components/Playground'

function App() {

  const refs = useRef<Refs>(null)
  const [bgColor, setBgColor] = useState<"#111414" | "#dddddd">("#111414")

  const effectLimiter = useRef<boolean>(false)

  const swapColors = useCallback((elem: HTMLElement) => {
    if (!elem) {
      console.log("There is no elem.")
      return
    }

    if (elem.style.backgroundColor != "rgb(17, 20, 20)") {
      elem.style.backgroundColor = "#111414"
      elem.style.color = "#dddddd"
    } else {
      elem.style.backgroundColor = "#dddddd"
      elem.style.color = "#111414"
    }
  }, [])
  
  // useEffect(() => {

  //   const box1Ref = refs.current?.box1Ref
  //   const box2Ref = refs.current?.box2Ref

  //   if (!(box1Ref?.current) || !(box2Ref?.current)) return

  //   function swapColors(elem: HTMLElement) {
  //     console.log(elem.style.backgroundColor)

  //     if (elem.style.backgroundColor != "rgb(17, 20, 20)") {
  //       console.log("is black")
  //       elem.style.backgroundColor = "#111414"
  //       elem.style.color = "#dddddd"
  //     } else {
  //       console.log("isn't black")
  //       elem.style.backgroundColor = "#dddddd"
  //       elem.style.color = "#111414"
  //     }
  //   }

  //   function handleBox1() {
  //     swapColors(box1Ref!.current as HTMLElement)
  //   }

  //   function handleBox2() {
  //     swapColors(box2Ref!.current as HTMLElement)
  //   }

  //   box1Ref.current.addEventListener("click", handleBox1)
  //   box2Ref.current.addEventListener("click", handleBox2)

  //   return () => {
  //     box1Ref.current?.removeEventListener("click", handleBox1)
  //     box2Ref.current?.removeEventListener("click", handleBox2)
  //   }
  // }, [])

  return (
    <div className="App">
      <div className="viewport">
        <Playground text1="Texto 1" text2="Texto 2" ref={refs} />
        <div onClick={() => swapColors(refs.current?.box1Ref.current)}>Clickable 1</div>
        <div onClick={() => swapColors(refs.current?.box2Ref.current)}>Clickable 2</div>
      </div>
    </div>
  )
}

export default App
