import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("renders App", () => {
    render(<App />);
    expect(screen.getByText("90s shop")).toBeInTheDocument();
  });
  it("navigates to cart page", () => {
    render(<App />);
    userEvent.click(screen.getByText("Cart (0)"));
    expect(global.window.location.pathname).toBe("/cart");
    expect(screen.getByText("Your cart")).toBeInTheDocument();
  });
});
