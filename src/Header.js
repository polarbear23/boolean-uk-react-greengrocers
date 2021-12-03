import React from 'react'

const Header = () => {
  const [StoreItems, setStoreItems] = useState(initialStoreItems)
  return (
    <header id="store">
      <h1>Greengrocers</h1>
      <ul class="item-list store--item-list"></ul>
    </header>
  )
}

export default Header
