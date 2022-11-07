import { render, fireEvent, waitFor } from "@testing-library/react-native"
import { describe, expect, it, jest } from "@jest/globals"

import SignInContainer from "../../../src/components/signin/SignInContainer"

describe("SignInContainer", () => {
  it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
    const onSubmit = jest.fn()
    const { getByTestId } = render(<SignInContainer onSubmit={onSubmit} />)

    fireEvent.changeText(getByTestId("usernameField"), "kalle")
    fireEvent.changeText(getByTestId("passwordField"), "password")
    fireEvent.press(getByTestId("submitButton"))

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1)

      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: "kalle",
        password: "password",
      })
    })
  })
})
