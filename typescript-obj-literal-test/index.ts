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

const erros: Errors = {
  err1: false,
  a: 1
}

function addError(error: Errors): Errors {
  return {
    ...error,
    attr: 1
  }
}