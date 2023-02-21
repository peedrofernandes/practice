const input = document.querySelector("#input")
const defaultText = document.querySelector("#default")
const debounceText = document.querySelector("#debounce")
const throttleText = document.querySelector("#throttle")

input.addEventListener("input", (e) => {
  defaultText.textContent = e.target.value
  updateDebounceText(e.target.value)
  updateThrottleText(e.target.value)
})

const updateDebounceText = debounce(text => {
  debounceText.textContent = text
})

const updateThrottleText = throttle(text => {
  throttleText.textContent = text
})

function debounce(cb, delay = 1000) {
  let timeout

  return (...args) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      cb(...args)
    }, delay)
  }
}

function throttle(cb, delay = 1000) {
  let shouldWait = false
  let waitingArgs = null

  function timeoutFunc() {
    if (waitingArgs !== null) {
      cb(...waitingArgs)
      waitingArgs = null
      setTimeout(timeoutFunc, delay)
    } else {
      shouldWait = false
    }
  }

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args
      return
    }

    cb(...args)
    shouldWait = true

    setTimeout(timeoutFunc, delay)
  }
}