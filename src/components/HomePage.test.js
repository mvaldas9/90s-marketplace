import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Home page", () => {
  it("renders home page", () => {
    render(<App />);
    expect(global.window.location.pathname).toBe("/");
    expect(screen.getByText("Our products")).toBeInTheDocument();
  });

  it("navigates to product page", () => {
    render(<App />);
    userEvent.click(screen.getByText("Spaceman"));
    expect(global.window.location.pathname).toBe("/products/23654236");
    expect(screen.getByText("Add to cart")).toBeInTheDocument();
  });
});
