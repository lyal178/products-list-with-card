import decrementIcon from "/assets/images/icon-decrement-quantity.svg";
import incrementIcon from "/assets/images/icon-increment-quantity.svg";
import cartIcon from "/assets/images/icon-add-to-cart.svg";
import "./QuantityButton.css"

const QuantityButton = ({ product, cartList, setCartList }) => {
  const getProductQuantity = (productId) => {
    const product = cartList.find((cartItem) => cartItem.id === productId);
    return product ? product.quantity : 0;
  };

  const handlePlusButton = (product) => {
    const existingItem = cartList.find(
      (cartItem) => cartItem.id === product.id
    );
    if (!existingItem) {
      setCartList((prevCartList) => [
        ...prevCartList,
        { ...product, quantity: 1 },
      ]);
    } else {
      setCartList((prevCartList) =>
        prevCartList.map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    }
  };

  const handleMinusButton = (product) => {
    setCartList((prevCartList) =>
      prevCartList
        .map((cartItem) =>
          cartItem.id === product.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  return (
    <>
      {getProductQuantity(product.id) > 0 ? (
        <div className="quantityButton">
          <button
            onClick={() => handleMinusButton(product)}
            className="quantityChangeButtons"
          >
            <img
              style={{ height: "10px", width: "10px" }}
              src={decrementIcon}
            />
          </button>
          <span>{getProductQuantity(product.id)}</span>
          <button
            onClick={() => handlePlusButton(product)}
            className="quantityChangeButtons"
          >
            <img
              style={{ height: "10px", width: "10px" }}
              src={incrementIcon}
            />
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            handlePlusButton(product);
          }}
          className="addtoCartButton"
        >
          <img src={cartIcon} /> Add to Cart
        </button>
      )}
    </>
  );
};
export default QuantityButton;
