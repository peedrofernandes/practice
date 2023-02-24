import { useState } from "react"

type Errors = ({
  err1: false;
} | {
  err1: true;
  msg1: string;
}) & ({
  err2: false;
} | {
  err2: true;
  msg2: string;
})

const customError: Errors = {
  err1: false,
  err2: false,
  attributeThatShouldntBeAllowed: 1
}

const [errors, setErrors] = useState<Errors>({
  err1: false,
  err2: false
})

function returnError(error: Errors): Errors {
  return {
    ...error,
    attr2: 1
  }
}

setErrors((state): Errors => ({
  ...state,
  attributeThatShouldntBeAllowed: "lol",
  anotherAttribute: 1
}))