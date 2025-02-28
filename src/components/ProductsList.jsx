import React from "react";
import "./ProductsList.css";
import cartIcon from "../assets/images/icon-add-to-cart.svg";
import decrementIcon from "../assets/images/icon-decrement-quantity.svg"
import incrementIcon from "../assets/images/icon-increment-quantity.svg"

const ProductList = ({ productArray, setCartList, cartList }) => {
  const getProductQuantity = (productId) => {
    const product = cartList.find((cartItem) => cartItem.id === productId);
    return product ? product.quantity : 0;
  };

  const handleAddButton = (product) => {
    const existingItem = cartList.find(
      (cartItem) => cartItem.id === product.id
    );
    if (!existingItem) {
      setCartList((prevCartList) => [
        ...prevCartList,
        { ...product, quantity: 1 },
      ]);
    }
  };
  return (
    <>
      <div className="productsSection">
        <h1>Desserts</h1>
        <div className="productsGrid">
          {productArray.map((product) => (
            <div className="productSection" key={product.id}>
              <div className="productImgSection">
                <picture className="productImage">
                  <source
                    srcSet={product.imgMobile}
                    media="(max-width: 480px)"
                  />
                  <source
                    srcSet={product.imgTablet}
                    media="(min-width: 481px) and (max-width: 1024px)"
                  />
                  <source
                    srcSet={product.imgDesktop}
                    media="(min-width: 1024px)"
                  />
                  <img
                    src={product.imgMobile}
                    alt={product.name}
                    className="productImage"
                  />
                </picture>
                {getProductQuantity(product.id) > 0 ? (
                  <div className="quantityButton">
                    <button className="quantityChangeButtons"><img style={{height:"10px", width: "10px"}} src={decrementIcon}/></button>
                    <span>{getProductQuantity(product.id)}</span>
                    <button className="quantityChangeButtons"><img style={{height:"10px", width: "10px"}} src={incrementIcon}/></button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      handleAddButton(product);
                    }}
                    className="addtoCartButton"
                  >
                    <img src={cartIcon} /> Add to Cart
                  </button>
                )}
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
// mobile max 480px
// tablet min 481px  max 1024px
// desktop min 1024

// make responsive img src work
