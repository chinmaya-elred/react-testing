import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import UserEvent from "./UserEvent";


test("Click event with user event library", async () => {
  userEvent.setup();
  render(<UserEvent />);
  const btn = screen.getByText("Click me");
  await userEvent.click(btn);
  expect(screen.getByText("hello")).toBeInTheDocument();
});
