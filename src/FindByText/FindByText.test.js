import { render, screen } from "@testing-library/react";
import FindByText from "./FindByText";


test("testing element with findBy", async () => {
  render(<FindByText />);
  const data = await screen.findByText("data found", {}, { timeout: "5000" });
  expect(data).toBeInTheDocument()
})