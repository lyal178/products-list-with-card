import "./OrderConfirmation.css";
import confirmIcon from "../../assets/images/icon-order-confirmed.svg";

const OrderConfirmation = ({ cartList, onClose, setCartList }) => {
  const totalPrice = cartList.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handleCloseButton = () => {
    setCartList([]);
    onClose();
  };

  return (
    <>
      <div className="orderConfirmationOverlay">
        <div className="orderConfirmationContent">
          <div style={{ textAlign: "left" }}>
            <img src={confirmIcon} />
            <h1>
              <b>Order Confirmed</b>
            </h1>
            <p>We hope you enjoy yor food!</p>
          </div>
          {cartList.map((cartItem) => (
            <div className="orderConfirmationItem" key={cartItem.id}>
              <div className="itemImgAndInfo">
                <img src={cartItem.imgThumbnail} />
                <div className="itemInfo">
                  <div>
                    <p>
                      <b>{cartItem.name}</b>
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <p style={{ color: "hsl(14, 86%, 42%)" }}>
                      {cartItem.quantity}x
                    </p>
                    <p style={{ color: "rgba(0, 0, 0, 0.50)" }}>
                      @${cartItem.price}
                    </p>
                  </div>
                </div>
              </div>
              <p>${cartItem.price * cartItem.quantity}</p>
            </div>
          ))}

          <section className="buttonSection">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "0 10px",
              }}
            >
              <p>Order Total</p>
              <p>
                <b>${totalPrice.toFixed(2)}</b>
              </p>
            </div>
          </section>
          <button className="closeButton" onClick={()=>handleCloseButton()}>
            Start New Order
          </button>
        </div>
      </div>
    </>
  );
};
export default OrderConfirmation;
