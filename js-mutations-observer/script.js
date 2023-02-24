const observer = new MutationObserver(entries => {
  console.log(entries)
})

const parent = document.querySelector(".parent")

observer.observe(parent, { attributes })