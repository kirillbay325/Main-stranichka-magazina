import "./Basket.css"
import { useState } from 'react';

function Basket(){
    
    const [openCart, SetOpenCart] = useState(true) 
  
    let styleOverflow = {} 
    let styleSideBlock = {} 
     
    if (openCart == true) { 
      styleOverflow = {width: '100%'}; 
      styleSideBlock = {width: '385px'}; 
    } 
      else { 
      styleOverflow = {width: '0'}; 
      styleSideBlock = {width: '0'}; 
      }

    return(
        <>        
        <div className="OverFlow" style={styleOverflow} onClick={() => SetOpenCart(false)}></div>
        <div className="SideBlock" style={styleSideBlock}>

        <h1>Корзина</h1>
        <div className="poloska"></div>
        <div className="MainProduct">
        <img src="https://sun9-40.userapi.com/impg/mnXvG8pVxR1lbpKlVjS64Xpc4rO1zdPYVZAqCA/ElGMYLxuFKU.jpg?size=539x604&quality=95&sign=4e9f892ed15e6e84a302e474f92547ea&c_uniq_tag=y95uQ53QNPy8Olxq91vdPum-ySG8nfe08txqTIAJcXQ&type=album" className="kartinka_card_basket"></img>
        <span className="TextProduct">Фулл сет на “DROW RANGER”</span>
        <div className="Close"><h1>×</h1></div>
        <div className="Minus"><h1>-</h1></div>
        <div className="Number"><h1>1</h1></div>
        <div className="Plus"><h1>+</h1></div>


        </div>

        </div>
        </>
    )
}

export default Basket