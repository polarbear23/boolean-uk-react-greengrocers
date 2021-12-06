import React from 'react'
import StoreItem from './StoreItem'
import { useState } from 'react'


const Header = props => {
  const [storeItems, setStoreItems] = useState(props.store)
  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul class="item-list store--item-list">
        {storeItems.map(item => {
          return <StoreItem item={item} />
        })}
      </ul>
    </header>
  )
}

export default Header
//import the data from db.js
//use the data to declare a state veraible
//map over the data and create a store item for every data object.
// place the map inside the ul.
