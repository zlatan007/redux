import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import { Provider } from "react-redux";
import reducer from "./components/reducer";
import {createStore} from "redux";

const initialStore = {
  cart: cartItems,
  total: 105,
  amount: 5,
}

const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
