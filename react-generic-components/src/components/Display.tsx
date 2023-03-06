import React from "react"
import "./Display.css"

declare module "react" {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement| null
}

interface Props<T> {
  title: string
  data: T[]
  showData: (data: T) => React.ReactElement
}

function DisplayComponent<T>(
  props: Props<T>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <div className="displayContainer" ref={ref}>
      <h1>{props.title}</h1>
      <section>
        {props.data.map(props.showData)}
      </section>
    </div>
  )
}

const Display = React.forwardRef(DisplayComponent)
export default Display