import { render, screen } from "@testing-library/react";
import UserEventOnChange from "./UserEventOnChange";
import userEvent from "@testing-library/user-event";


test("onChange event testing", async () => {
  userEvent.setup();
  render(<UserEventOnChange />);
  const el = screen.getByRole("textbox");
  await userEvent.type(el, "chinu");
  expect(screen.getByText("chinu")).toBeInTheDocument();
});
