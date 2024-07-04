import { act, render, screen } from "@testing-library/react";
import ActFunction from "./actFunction";
import userEvent from "@testing-library/user-event";


test("act function", async () => {
  userEvent.setup();
  render(<ActFunction />);
  const input = screen.getByRole("textbox");
  await act(async () => await userEvent.type(input, "chinmaya"));
  expect(screen.getByText("chinmaya")).toBeInTheDocument();
});
