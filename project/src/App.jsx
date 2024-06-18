import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductList } from './components/ProductList'
import { Basket } from './components/Basket'

function App() {
  const [products, setProducts] = useState([])

  const [basket, setBasket] = useState([])

  const [total,setTotal]=useState(0)


  useEffect(() => {
    fetch("http://localhost:1111/items")
    .then (res=>res.json())
    .then(res=>{
      setProducts(res)
    })
  }, [])

  useEffect(() => {
    setTotal(basket.reduce((a, b) => a + (b.price * b.count), 0))
  }, [basket])

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
        <Basket items={basket} addItem={addItem} delItem={delItem} removeItem={removeItem} total={total}/>
      </div>
    </>
  )
}

export default App
