import React from "react";
import "./ProductsList.css";
import cartIcon from "../assets/images/icon-add-to-cart.svg";
const ProductList = ({ productArray }) => {
  return (
    <>
      <div className="productsSection">
        <h1>Desserts</h1>
        <div className="productsGrid">
          {productArray.map((product) => (
            <div className="productSection">
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

                <button className="countButton">
                  <img src={cartIcon} /> Add to Cart
                </button>
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
