import { useState } from "react";
import ProductsList from "./components/ProductsList.jsx";
import Cart from "./components/Cart.jsx";
import productSource from "../productSource.js";
import "./App.css"

function App() {
  const [productArray, setProductArray] = useState(productSource);
  const [cartList, setCartList] = useState([]);

  return (
    <>
      <div className="pageLayout">
        <ProductsList productArray={productArray} cartList={cartList} setCartList={setCartList}  />
        <Cart cartList={cartList} setCartList={setCartList} />
      </div>
    </>
  );
}

export default App;
