import './App.css';
import Header from './Header/Header'
import Main from './Main/Main'
import Basket from "./Basket/Basket"

import { useState } from 'react';



function App() {
  const [openCart, setOpenCart] = useState (true)
  return(
  <>
  <div className='MainApp'>
    <SideCart openCart={openCart} onCloseCart={() => setOpenCart}/>
    <Header onOpenCart={() => setOpenCart(true)}/>
  </div>
  <Basket/>
  <Header/> 
  <Main/>
    
  </>
  )
}
export default App;