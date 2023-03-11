import './App.css';
import Header from './Header/Header'
import Main from './Main/Main'
import Basket from './Basket/Basket'
import { useState } from 'react';



function App() {
  const [showPanel, setShowPanel] = useState (false)
  const [cart, setCart] = useState([])

    function addProdToCard(newProd){
      setCart(prev => [...prev, newProd])
    }
  return(
  <>

    <Basket onCloseCart={() => setShowPanel(false)} showPanel={showPanel} />
    <Header onOpenCart={() => setShowPanel(true)} /> 
    <Main addProdToCard={(newProd) =>  addProdToCard(newProd)} />
  </>
  )
}
export default App;