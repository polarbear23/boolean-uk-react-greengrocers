import React from 'react'
const StoreItem = props => {
  return (
    <li>
      <div class="store--item-icon">
        <img src={`/assets/icons/${props.item.id}.svg`} alt="" />
      </div>
      <button>Add to cart</button>
    </li>
  )
}

export default StoreItem
