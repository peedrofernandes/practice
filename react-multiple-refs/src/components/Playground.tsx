import React, { useImperativeHandle, useRef } from "react"
import "./Playground.css"

interface Props {
  text1: string
  text2: string
}

export interface PlaygroundForwardedRefs {
  box1Ref: React.RefObject<HTMLDivElement>,
  box2Ref: React.RefObject<HTMLDivElement>
}

function PlaygroundComponent(
  props: Props,
  ref: React.ForwardedRef<PlaygroundForwardedRefs>
) {

  const ref1 = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)

  useImperativeHandle(ref, () => ({
    box1Ref: ref1, box2Ref: ref2
  }))

  return (
    <div className="Container">
      <div className="box1" ref={ref1}>
        <p>{props.text1}</p>
      </div>
      <div className="box2" ref={ref2}>
        <p>{props.text2}</p>
      </div>
    </div>
  )
}

const Playground = React.forwardRef(PlaygroundComponent)
export default Playground

