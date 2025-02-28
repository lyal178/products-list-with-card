import emptyCartIcon from "../assets/images/illustration-empty-cart.svg";
import deleteButtonIcon from "../assets/images/icon-remove-item.svg";
import carbonIcon from "../assets/images/icon-carbon-neutral.svg";
import "./Cart.css";
const Cart = ({ cartList,setCartList }) => {
  
  const handleDeleteButton = (cartItem) => {
    const updatedCartList = cartList.filter(item => item.id !== cartItem.id);
    setCartList(updatedCartList);
  }
  
  return (
    <>
      <div className="cartSection">
        <h2 style={{ textAlign: "left", color: "hsl(14, 86%, 42%)" }}>
          Your cart ({cartList.length})
        </h2>
        {!cartList.length ? (
          <img className="emptyCartIcon" src={emptyCartIcon} />
        ) : (
          cartList.map((cartItem) => (
            <div className="cartItem">
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
                <b>$42.21</b>
              </p>
            </div>
            <p className="carbonQuote">
              <img src={carbonIcon} /> This is a <b>carbon-neutral</b> delivery
            </p>
            <button className="orderButton">Confirm Order</button>
          </section>
        )}
      </div>
    </>
  );
};
export default Cart;
