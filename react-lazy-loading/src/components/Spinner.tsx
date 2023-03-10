import React from "react"
import styles from "./Spinner.module.css"

type SpinnerProps = {
  size: number;
  dashArray?: number;
  dashOffset?: number;
}

export default function Spinner(props: SpinnerProps) {

  const containerStyles = { width: props.size, height: props.size }

  const circleStyles = { strokeDasharray: props.dashArray, strokeDashoffset: props.dashOffset }

  return (
    <div className={styles.spinnerContainer} style={containerStyles}>
      <svg className={styles.spinner} viewBox="0 0 48 48">
        <circle className={styles.circle}
          cx="24"
          cy="24"
          r="21"
          style={circleStyles}
        >
        </circle>
      </svg>
    </div>
  )
}