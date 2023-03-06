import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import Display from './components/Display'

type Person = {
  name: string
  age: number
}

function App() {

  const divRef = useRef<HTMLDivElement>(null)

  const displayPerson = useCallback((person: Person) => (
    <div>{person.name}, {person.age} years old.</div>
  ), [])

  const colors = useMemo(() => (
    [
      "#111414",
      "#ffffff",
      "#ff0000",
      "#00ff00",
      "#0000ff"
    ]), [])

  useEffect(() => {
    if (!divRef.current) {
      console.log("no div ref!")
      return
    }
    console.log("div ref: ")
    console.log(divRef)

    function handleChangeColor() {
      const random = Math.floor((Math.random() * 100) % 5)
      divRef.current!.style.backgroundColor = colors[random]
    }

    divRef.current.addEventListener("click", handleChangeColor)

    return () => {
      divRef.current!.removeEventListener("click", handleChangeColor)
    }
  }, [])

  const people: Person[] = useMemo(() => (
    [
      {
        name: "Pedro",
        age: 20
      },
      {
        name: "Maria",
        age: 21
      }
    ]
  ), [])

  return (
    <div className="App">
      <Display<Person>
        title="Display People"
        data={people}
        showData={displayPerson}
        ref={divRef}
      />
    </div>
  )
}

export default App
