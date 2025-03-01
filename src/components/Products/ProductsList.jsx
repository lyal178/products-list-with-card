import React from "react";
import "./ProductsList.css";
import QuantityButton from "./QuantityButton";

const ProductList = ({ productArray, setCartList, cartList }) => {
  const isProductInCart = (productId) => {
    return cartList.some((cartItem) => cartItem.id === productId);
  };

  return (
    <>
      <div className="productsSection">
        <h1>Desserts</h1>
        <div className="productsGrid">
          {productArray.map((product) => (
            <div className="productSection" key={product.id}>
              <div
                className={`productImgSection ${
                  isProductInCart(product.id) ? "inCart" : ""
                }`}
              >
                <img
                  src={product.imgMobile}
                  alt={product.name}
                  className="productImage"
                />
                <QuantityButton
                  product={product}
                  setCartList={setCartList}
                  cartList={cartList}
                />
              </div>
              <div className="productInfoSection">
                <p className="productType">{product.type}</p>
                <h3 className="productName">{product.name}</h3>
                <p className="productPrice">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
