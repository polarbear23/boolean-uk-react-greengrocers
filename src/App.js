import './styles/reset.css'
import './styles/index.css'
import Credits from './Credits'
import Main from './Main'
import Header from './Header'
import data from './db.js'
import { useState } from 'react'
/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/
console.log(data.items)
const initialStoreItems = data.items
const initalCartItems = data.cart

export default function App() {
  const [cartItems, setCartItems] = useState(initalCartItems)

  return (
    <>
      <Header store={StoreItems} />
      <Main cart={cartItems} />
      <Credits />
    </>
  )
}
