const textarea = document.querySelector("#main-textarea")
const textarea_enumerator = document.querySelector(".textarea-numbers")

function completeEnumeratorSpans(n) {
  const currentQtySpans = textarea_enumerator.childElementCount

  if (n > currentQtySpans) {
    for (let i = currentQtySpans + 1; i <= n; i++) {
      const newSpan = document.createElement("span")
      newSpan.innerText = i
      textarea_enumerator.appendChild(newSpan)
    }
  } else if (n < currentQtySpans) {
    for (let i = n; i < currentQtySpans; i++)
      textarea_enumerator.removeChild(textarea_enumerator.lastElementChild)
  }
}

let currentHeight = 1
textarea.addEventListener("input", (e) => {
  const currentValue = e.target.value
  const lines = currentValue.split("\n")
  if (lines.length > currentHeight) {
    currentHeight = lines.length
    textarea.style.height = `${22 * currentHeight}px`
    console.log(textarea.style.height)
    completeEnumeratorSpans(currentHeight)
  } else if (lines.length < currentHeight) {
    currentHeight = lines.length
    textarea.style.height = `${22 * currentHeight}px`
    console.log(textarea.style.height)
    completeEnumeratorSpans(currentHeight)
  }
})

let currentLine = 1
function handleSelectionChange() {
  setTimeout(() => {
    const selectionStart = textarea.selectionStart
    const newCurrentLine = textarea.value.substr(0, selectionStart).split("\n").length
    
    console.log(newCurrentLine, currentLine)
    
    if (newCurrentLine === currentLine) return

    const currentBackgroundLine =
      textarea_enumerator.querySelector(`:nth-child(${currentLine})`)
    const newCurrentBackgroundLine =
      textarea_enumerator.querySelector(`:nth-child(${newCurrentLine})`)
    
    newCurrentBackgroundLine.style.backgroundColor = "#ffffff10"
    currentBackgroundLine.style.backgroundColor = "inherit"

    currentLine = newCurrentLine
  }, 0)
}

textarea.addEventListener("keydown", handleSelectionChange)
textarea.addEventListener("mousedown", handleSelectionChange)