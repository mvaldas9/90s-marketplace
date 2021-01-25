import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux";

import Header from "./Header";
import CartPage from "./CartPage";
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";

import "./App.style.css";

function App() {
  return (
    <div className="app-wrapper">
      <Provider store={store}>
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
      </Provider>
    </div>
  );
}

export default App;
