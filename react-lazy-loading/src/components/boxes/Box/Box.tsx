import React, { Suspense } from "react"
import Spinner from "../../Spinner"
import "./BoxStyles.css"

const BlueBox = React.lazy(() => import("../BlueBox"))
const YellowBox = React.lazy(() => import("../YellowBox"))
const RedBox = React.lazy(() => import("../RedBox"))

type BoxProps = {
  variant: "blue" | "red" | "yellow"
}

export function Box(props: BoxProps) {
  let result: JSX.Element
  switch (props.variant) {
    case "blue":
      result = <BlueBox />
      break
    case "red":
      result = <RedBox />
      break
    case "yellow":
      result = <YellowBox />
      break
    default:
      return null
  }

  return (
    <Suspense fallback={<Spinner size={36} />}>
      {result}
    </Suspense>
  )
}