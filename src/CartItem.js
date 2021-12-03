import React from 'react'

const CartItem = (props) => {
    return (
        <li>
            <img
                class="cart--item-icon"
                src={`/assets/icons/${props.item.id}.svg`}
                alt={props.item.name}
            />
            <p>{props.item.name}</p>
            <button class="quantity-btn remove-btn center" onClick={(e) => props.decreaseQuantity(props.item)}>-</button>
            <span class="quantity-text center">{props.item.quantity}</span>
            <button class="quantity-btn add-btn center" onClick={(e) => props.increaseQuantity(props.item)}>+</button>
        </li>
    )
}

export default CartItem
