import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductList } from './components/ProductList'
import { Basket } from './components/Basket'

function App() {
  const [products, setProducts] = useState([
    { id: 101, title: "Psychology", price: 20, photo: "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780744098556/9780744098556_cover.jpg" },
    { id: 102, title: "Math", price: 16, photo: "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780744081619/9780744081619_cover.jpg" },
    { id: 103, title: "English", price: 14, photo: "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780744060188/9780744060188_cover.jpg" },
    { id: 104, title: "History", price: 24, photo: "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780744084962/9780744084962_cover.jpg" },
    { id: 105, title: "Architecture", price: 30, photo: "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_1160,h_1300/dk-core-nonprod/9780744084986/9780744084986_cover.jpg" }
  ])

  const [basket, setBasket] = useState([])

  const moveToCart = id => {
    setBasket(basket => {
      const found = basket.find(item => item.id === id)
      return found
        ? basket.map(item => item.id === id ? { ...item, count: item.count + 1 } : item)
        : [...basket, { ...products.find(p => p.id === id), count: 1 }]
    })
  }

  const addItem = id => {
    setBasket(basket =>
      basket.map(item => item.id === id ? { ...item, count: item.count + 1 } : item)
    )
  }

  const delItem = id => {
    setBasket(basket =>
      basket.map(item => item.id === id ? { ...item, count: item.count - 1 } : item).filter(item => item.count > 0)
    )
  }

  const removeItem = id => {
    setBasket(basket => basket.filter(item => item.id !== id))
  }

  return (
    <>
      <div className='row'>
        <ProductList items={products} onMove={moveToCart} />
        <Basket items={basket} addItem={addItem} delItem={delItem} removeItem={removeItem} />
      </div>
    </>
  )
}

export default App
