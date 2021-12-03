import './styles/reset.css'
import './styles/index.css'
import Credits from './Credits'
import Main from './Main'
import Header from './Header'
import data from './db.js'
/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/
console.log(data.items);
const initialStoreItems = "";

export default function App() {
  // Setup state here...

  return (
    <>
      <Header />
      <Main />
      <Credits />
    </>
  )
}
