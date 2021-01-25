import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import store, { addToCart } from "../redux";

describe("Cart page", () => {
  global.window.history.pushState({}, "", "/cart");

  it("renders cart page", () => {
    render(<App />);

    expect(global.window.location.pathname).toBe("/cart");
    expect(screen.getByText("Your cart")).toBeInTheDocument();
  });

  it("shows 'No items in the cart'", () => {
    render(<App />);

    expect(screen.getByText("No items in the cart")).toBeInTheDocument();
    expect(screen.getByText("Cart (0)")).toBeInTheDocument();
  });

  it("shows items in the cart", () => {
    render(<App />);

    store.dispatch(
      addToCart({
        id: 1,
        name: "Test item",
        price: 20,
        imgUrl: "",
      })
    );
    store.dispatch(
      addToCart({
        id: 2,
        name: "Test item #2",
        price: 10,
        imgUrl: "",
      })
    );
    store.dispatch(
      addToCart({
        id: 2,
      })
    );

    const row1 = screen.queryByText("Test item").closest("tr");
    const withinRow1 = within(row1);
    const row2 = screen.queryByText("Test item #2").closest("tr");
    const withinRow2 = within(row2);

    expect(screen.queryByText("No items in the cart")).not.toBeInTheDocument();

    expect(row1).toBeInTheDocument();
    expect(withinRow1.getByText("20 EUR")).toBeInTheDocument();

    expect(row2).toBeInTheDocument();
    expect(withinRow2.getByText("10 EUR")).toBeInTheDocument();

    expect(screen.getByText("Cart (3)")).toBeInTheDocument();
    expect(
      screen.queryByText("Total price of 3 items: 40 EUR")
    ).toBeInTheDocument();
  });

  it("increments quantity of the items", () => {
    render(<App />);

    const row1 = screen.queryByText("Test item").closest("tr");
    const withinRow1 = within(row1);
    const row2 = screen.queryByText("Test item #2").closest("tr");
    const withinRow2 = within(row2);

    userEvent.click(withinRow1.getByText("+"));
    userEvent.click(withinRow2.getByText("+"));

    expect(screen.getByText("Cart (5)")).toBeInTheDocument();
    expect(
      screen.queryByText("Total price of 5 items: 70 EUR")
    ).toBeInTheDocument();
  });

  it("decrements quantity of the items", () => {
    render(<App />);

    const row1 = screen.queryByText("Test item").closest("tr");
    const withinRow1 = within(row1);
    const row2 = screen.queryByText("Test item #2").closest("tr");
    const withinRow2 = within(row2);

    userEvent.click(withinRow1.getByText("-"));
    userEvent.click(withinRow1.getByText("-"));
    userEvent.click(withinRow2.getByText("-"));

    expect(screen.queryByText("Test item")).not.toBeInTheDocument();
    expect(screen.queryByText("Test item #2")).toBeInTheDocument();

    expect(screen.getByText("Cart (2)")).toBeInTheDocument();
    expect(
      screen.queryByText("Total price of 2 items: 20 EUR")
    ).toBeInTheDocument();
  });
});
