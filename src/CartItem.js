import React from 'react'

const CartItem = (props) => {
    return (
        <li>
            <img
                class="cart--item-icon"
                src={`/assets/icons/${props.id}.svg`}
                alt={props.name}
            />
            <p>beetroot</p>
            <button class="quantity-btn remove-btn center" onClick={(e) => props.decreaseQuantity}>-</button>
            <span class="quantity-text center">{props.item.quantity}</span>
            <button class="quantity-btn add-btn center" onClick={(e) => props.increaseQuantity}>+</button>
        </li>
    )
}

export default CartItem
