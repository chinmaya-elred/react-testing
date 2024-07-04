import { render, screen } from "@testing-library/react";
import PropsTesting  from "./PropsTesting";


test("Props testing", () => {
  const name = "Chinmaya";
  render(<PropsTesting name={name} />);
  const user = screen.getByText(name);
  expect(user).toBeInTheDocument();
});
