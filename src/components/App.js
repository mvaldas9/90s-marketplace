import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./Header";
import CartPage from "./CartPage";
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";

import "./App.style.css";

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/products/:id">
              <ProductPage />
            </Route>
            <Route path="/cart">
              <CartPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
