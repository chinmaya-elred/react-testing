import { render } from "@testing-library/react";
import QuerySlector from "./QuerySlector";

test("custom query", () => {
  render(<QuerySlector />);
  const element = document.querySelector("#test-id");
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("Hello World");
  expect(element).toHaveAttribute("class");
});
