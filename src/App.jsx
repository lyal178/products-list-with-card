import { useState } from "react";
import ProductsList from "./components/ProductsList.jsx";
import Cart from "./components/Cart.jsx";
import productSource from "../productSource.js";
import "./App.css"

function App() {
  const [productArray, setProductArray] = useState(productSource);
  const [cartList, setCartList] = useState([ {
    name: "Waffle with Berries",
    type: "Waffle",
    price: 6.50,
    quantity: 5
  },{
    name: "Waffle with Berries",
    type: "Waffle",
    price: 6.50,
    quantity: 5
  },{
    name: "Waffle with Berries",
    type: "Waffle",
    price: 6.50,
    quantity: 5
  }]);

  return (
    <>
      <div className="pageLayout">
        <ProductsList productArray={productArray} />
        <Cart cartList={cartList} />
      </div>
    </>
  );
}

export default App;
