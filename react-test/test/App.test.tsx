import React from "react"
import App from "../src/App"
import { render, screen } from "@testing-library/react"
import user from "@testing-library/user-event"


test("Renders main page correctly", async () => {
  render(<App />)
  const buttonCount = await screen.findByRole<HTMLButtonElement>("button")

  // Pre expectations
  expect(buttonCount).toBeInTheDocument()
  expect(buttonCount.id).toBe("counter")
  expect(buttonCount.innerHTML).toBe("count is: 0")

  expect(screen.queryByText(/The count is now:/)).not.toBeInTheDocument()

  await user.click(buttonCount)
  await user.click(buttonCount)

  // Post expectations
  expect(buttonCount.innerHTML).toBe("count is: 2")

  expect(screen.queryByText(/The count is now:/)).toBeInTheDocument()
})