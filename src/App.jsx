import { useState } from 'react'
import './App.css'
import ProductsList from './components/productsList.jsx'
import Cart from './components/cart.jsx'
import productSource from '../productSource.js'

function App() {
  const [productArray,setProductArray] = useState(productSource)
  const [cartList,setCartList] = useState(null)

  return (
    <>
      <ProductsList productArray={productArray}/>
      <Cart cartList={cartList}/>
    </>
  )
}

export default App
