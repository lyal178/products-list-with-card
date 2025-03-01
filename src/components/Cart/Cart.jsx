import React, { useState } from 'react';
import emptyCartIcon from "/assets/images/illustration-empty-cart.svg";
import deleteButtonIcon from "/assets/images/icon-remove-item.svg";
import carbonIcon from "/assets/images/icon-carbon-neutral.svg";
import OrderConfirmation from "./OrderConfirmation.jsx";
import "./Cart.css";

const Cart = ({ cartList,setCartList }) => {
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);

  const toggleShowOrderConfirmation =()=>{
    setShowOrderConfirmation(!showOrderConfirmation);
  }

  const handleDeleteButton = (cartItem) => {
    const updatedCartList = cartList.filter(item => item.id !== cartItem.id);
    setCartList(updatedCartList);
  }

  const totalPrice = cartList.reduce((total, item) => total + item.price * item.quantity, 0);
  
  return (
    <>
      <div className="cartSection">
        <h2 style={{ textAlign: "left", color: "hsl(14, 86%, 42%)" }}>
          Your cart ({cartList.length})
        </h2>
        {/* List of products */}
        {!cartList.length ? (
          <img className="emptyCartIcon" src={emptyCartIcon} />
        ) : (
          cartList.map((cartItem) => (
            <div className="cartItem" key={cartItem.id}>
              <p>
                <b>{cartItem.name}</b>
              </p>
              <div className="cartItemInfo">
                <div className="cartItemPrice">
                  <p style={{ color: "hsl(14, 86%, 42%)" }}>
                    {cartItem.quantity}x
                  </p>
                  <p style={{ color: "rgba(0, 0, 0, 0.50)" }}>
                    @${cartItem.price}
                  </p>
                  <p>${cartItem.price * cartItem.quantity}</p>
                </div>
                <button onClick={()=>{handleDeleteButton(cartItem)}} className="deleteButton">
                  <img src={deleteButtonIcon} />
                </button>
              </div>
            </div>
          ))
        )}
        {/* Checkout btn*/}
        {!cartList.length ? (
          <p className="emptyCartParagraph">Your added item will appear here</p>
        ) : (
          <section className="orderTotalSection">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0 10px",
              }}
            >
              <p>Order Total</p>
              <p>
                <b>{totalPrice.toFixed(2)}</b>
              </p>
            </div>
            <p className="carbonQuote">
              <img src={carbonIcon} /> This is a <b>carbon-neutral</b> delivery
            </p>
            <button className="orderButton" onClick={toggleShowOrderConfirmation}>Confirm Order</button>
          </section>
        )}
      </div>
      {showOrderConfirmation && <OrderConfirmation onClose={toggleShowOrderConfirmation} cartList={cartList} setCartList={setCartList}/>}
    </>
  );
};
export default Cart;
