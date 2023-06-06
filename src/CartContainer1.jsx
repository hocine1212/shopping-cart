import CartItem1 from "./CartItem1";
import { useGlobalContext } from "./context";
// import cartItems from "./data";

const CartContainer1 = () => {
  const { cart, total, clearCart } = useGlobalContext();
  if (cart.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((cartItem) => {
          return <CartItem1 key={cartItem.id} {...cartItem} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>${total}</span>
          </h5>
        </div>
        <button className="btn-hipster" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};
export default CartContainer1;
