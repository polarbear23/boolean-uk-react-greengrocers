import React from 'react'
import CartItem from './CartItem'
export default function main(props) {

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      item.quantity--;
      props.setCartItems([...props.cart])
      console.log(props.cart);
    }
    else if (item.quantity === 1) {
      const indexOfItem = props.cart.indexOf(item);
      props.cart.splice(indexOfItem, 1);
      props.setCartItems([...props.cart]);
    }
  };
  const increaseQuantity = (item) => {
    item.quantity++;
    props.setCartItems([...props.cart]);
    console.table(props.cart);
  };
  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div class="cart--item-list-container">
        <ul class="item-list cart--item-list">
          {props.cart.map((item) => (
            <CartItem item={item} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} />
          ))}
        </ul>
      </div>
      <div class="total-section">
        <div>
          <h3>Total</h3>
        </div>
        <div>
          <span class="total-number">£0.00</span>
        </div>
      </div>
    </main>
  )
}
