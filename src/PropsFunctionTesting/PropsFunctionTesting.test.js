import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PropsFunctionTesting from "./PropsFunctionTesting";

test("functional props testing test1", async () => {
  const testFunction = jest.fn();
  userEvent.setup();
  render(<PropsFunctionTesting testFunction={testFunction} />);
  const btn = screen.getByRole("button");
  await userEvent.click(btn);
  expect(testFunction).toBeCalled();
});
