import React, { useState } from "react";
import Square from "./Square";

export type Color = 1 | 2 | 3 | 4 | 5;

function random(): Color {
  return Math.floor(Math.random() * 10 % 5) + 1 as Color;
}

export default function App() {
  const [colors, setColors] = useState<[Color, Color, Color, Color, Color]>(
    [1,4,2,1,1]
  )

  console.log("Component App re-rendered.")

  const functionsSet = [
    () => setColors([random(), colors[1], colors[2], colors[3], colors[4]]),
    () => setColors([colors[0], random(), colors[2], colors[3], colors[4]]),
    () => setColors([colors[0], colors[1], random(), colors[3], colors[4]]),
    () => setColors([colors[0], colors[1], colors[2], random(), colors[4]]),
    () => setColors([colors[0], colors[1], colors[2], colors[3], random()])
  ]

  return (
    <>
    <div>
      <Square color={colors[0]} handleButtonClick={() => functionsSet[0]()} />
      <Square color={colors[1]} handleButtonClick={() => functionsSet[1]()} />
      <Square color={colors[2]} handleButtonClick={() => functionsSet[2]()} />
      <Square color={colors[3]} handleButtonClick={() => functionsSet[3]()} />
      <Square color={colors[4]} handleButtonClick={() => functionsSet[4]()} />
    </div>
    </>
  )
}