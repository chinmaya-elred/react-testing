import { render, screen, within } from "@testing-library/react";
import QueryWithin from "./QueryWithin";


test("testing with within function testcase", () => {
  render(<QueryWithin />);
  const el = screen.getByText("Hello World");
  const subEl = within(el).getByText("hi");
  const subEl2 = within(el).getByText("hello");
  expect(el).toBeInTheDocument();
  expect(subEl).toBeInTheDocument();
  expect(subEl2).toBeInTheDocument();
});
