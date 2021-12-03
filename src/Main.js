import React from 'react'
import CartItem from './CartItem'
export default function main(props) {
  return (
    <main id="cart">
      <h2>Your Cart</h2>
      <div class="cart--item-list-container">
        <ul class="item-list cart--item-list">
          {props.cart.map((item) => (
            <CartItem item={item} decreaseQuantity={props.decreaseQuantity} increaseQuantity={props.increaseQuantity} />
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
