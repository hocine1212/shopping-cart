import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useGlobalContext } from "./context";

const CartItem1 = ({ id, title, price, img, amount }) => {
  const { removeItem, increase, decrease, toggleAmount } = useGlobalContext();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h5>{title}</h5>
        <span className="item-price">${price}</span>
        <button className="remove-btn" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => toggleAmount(id, "inc")}>
          <FaChevronUp className="amount-icon" />
        </button>
        <span className="amount">{amount}</span>
        <button className="amount-btn" onClick={() => toggleAmount(id, "dec")}>
          <FaChevronDown className="amount-icon" />
        </button>
      </div>
    </article>
  );
};
export default CartItem1;
