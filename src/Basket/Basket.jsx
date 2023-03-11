import "./Basket.css"
import { useState } from 'react';

function Basket() {

  const [openCart, SetOpenCart] = useState(true)
  const [count, setCount] = useState(0);
  const [oform, setOform] = useState(false);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  let styleOverflow = {}
  let styleSideBlock = {}

  if (openCart == true) {
    styleOverflow = { width: '100%' };
    styleSideBlock = { width: '385px' };
  }
  else {
    styleOverflow = { width: '0' };
    styleSideBlock = { width: '0' };
  }

  let content = oform ? <div><h1>Корзина</h1>
    <img src="./img/Group91(1).svg" className="Close" onClick={() => SetOpenCart(false)}></img>
    <div className="poloska"></div>

    <div className="TovarOformlenDiv" >
      <img className="TovarOformlen" src="./img/image12.svg" alt="" />
      <a href="#"  onClick={() => setOform(false)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        назад
      </a>
      <p><b>Заказ оформлен!</b></p>
      <p style={{
        color: "grey",
        textAlign: "center",
      }}>Ваш заказ #18 скоро будет передан курьерской доставке</p>
    </div>



  







  </div> : <div><h1>Корзина</h1>
    <img src="./img/Group91(1).svg" className="Close" onClick={() => SetOpenCart(false)}></img>
    <div className="poloska"></div>
    <div className="MainProduct">
      <img src="https://sun9-40.userapi.com/impg/mnXvG8pVxR1lbpKlVjS64Xpc4rO1zdPYVZAqCA/ElGMYLxuFKU.jpg?size=539x604&quality=95&sign=4e9f892ed15e6e84a302e474f92547ea&c_uniq_tag=y95uQ53QNPy8Olxq91vdPum-ySG8nfe08txqTIAJcXQ&type=album" className="kartinka_card_basket"></img>
      <p className="TextProduct">Фулл сет на “DROW RANGER”</p>
      <img src="./img/Group110.svg" className="Plus" onClick={increment}></img>
      <img src="./img/Group91(1).svg" className="Close"></img>
      <img src="./img/Group111.svg" className="Minus" onClick={decrement}></img>
      <input type={"text"} value={count} className="Number"></input>
    </div>


    <p style={{
      bottom: "10%",
      right: "45%",
      position: "absolute",
    }}>Итого: 1000</p>

    <a href="#" onClick={() => setOform(true)}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Купить
    </a></div>

  return (
    <>
      <div className="OverFlow" style={styleOverflow} onClick={() => OnCloseCart()}></div>
      <div className="SideBlock" style={styleSideBlock}>

        {content}


      </div>
    </>
  )
}

export default Basket