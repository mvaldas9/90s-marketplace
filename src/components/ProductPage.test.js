import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Product page", () => {
  global.window.history.pushState({}, "", "/products/23654236");

  it("renders product page", () => {
    render(<App />);

    expect(global.window.location.pathname).toBe("/products/23654236");
    expect(screen.getByText("Spaceman")).toBeInTheDocument();
    expect(screen.getByText("Cart (0)")).toBeInTheDocument();
  });

  it("adds items to cart", () => {
    render(<App />);

    const addToCartButton = screen.getByText("Add to cart");

    userEvent.click(addToCartButton);
    userEvent.click(addToCartButton);

    expect(screen.getByText("Cart (2)")).toBeInTheDocument();
  });
});
