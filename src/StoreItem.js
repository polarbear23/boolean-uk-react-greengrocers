import React from 'react'
const StoreItem = (props) => {
    return (
        <li>
            <div class="store--item-icon">
                <img src={`/assets/icons/${props.item.id}.svg`} alt={props.item.name} />
            </div>
            <button onClick={(e) => props.setCartItems([...props.cartItems, { ...props.item, quantity = 1 }])}>Add to cart</button>
        </li>
    )
}

export default StoreItem
