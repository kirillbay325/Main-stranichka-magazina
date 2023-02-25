import "./Main.css"
import { useState } from 'react';


function Main(){
    const [on, setOn] = useState(false); 
     const [off, setOff] = useState(true); 

     const [onn, setOnn] = useState(false); 
     const [offf, setOfff] = useState(true);

     const [onnn, setOnnn] = useState(false); 
     const [offff, setOffff] = useState(true);
    return(
    <>
    <img src="https://overplus.gg/_nuxt/img/icons.faa97ba.webp" className="AllItems"></img>

    {/* // КАРТОЧКА // */}
    <div className="MainCards">
    <div className="card">

        <img src="https://sun9-40.userapi.com/impg/mnXvG8pVxR1lbpKlVjS64Xpc4rO1zdPYVZAqCA/ElGMYLxuFKU.jpg?size=539x604&quality=95&sign=4e9f892ed15e6e84a302e474f92547ea&c_uniq_tag=y95uQ53QNPy8Olxq91vdPum-ySG8nfe08txqTIAJcXQ&type=album" className="kartinka_card"></img>
        <p  className="TextCard">Фулл сет на <span style={{
            color: "black",
            fontWeight: "bold",
            }}>“DROW RANGER”</span>
        </p>
        <div>
            <span className="TextCard">Цена: <br/><span  className="TextCard" style={{
                color: "black",
                fontWeight: "bold",
                }}>12.000 рублей</span>
            </span> 
            <button style={{
                width: "40px",
                height: "40px",
                display: "inline-block",
                marginLeft: "30%",
                borderRadius: "10px",
                backgroundColor: "white"
                }}>
               <span  style={{
                fontWeight: "bold",
                margin: "0%",
               }}
               >+</span> 
            </button>
            <button style={{
                width: "40px",
                height: "40px",
                display: "inline-block",
                marginLeft: "3%",
                borderRadius: "100px",
                backgroundColor: "white"
                }}  onClick={() => setOn(!on)}>   { on ? '🖤' : off ? '🤍' : "" } 
            </button>
        </div>
    </div> 

            
    <div className="card">

        <img src="https://sun9-40.userapi.com/impg/mnXvG8pVxR1lbpKlVjS64Xpc4rO1zdPYVZAqCA/ElGMYLxuFKU.jpg?size=539x604&quality=95&sign=4e9f892ed15e6e84a302e474f92547ea&c_uniq_tag=y95uQ53QNPy8Olxq91vdPum-ySG8nfe08txqTIAJcXQ&type=album" className="kartinka_card"></img>
        <p  className="TextCard">Фулл сет на <span style={{
            color: "black",
            fontWeight: "bold",
            }}>“WINDRANGER”</span>
        </p>
        <div>
            <span className="TextCard">Цена: <br/><span  className="TextCard" style={{
                color: "black",
                fontWeight: "bold",
                }}>12.000 рублей</span>
            </span> 
            <button style={{
                width: "40px",
                height: "40px",
                display: "inline-block",
                marginLeft: "30%",
                borderRadius: "10px",
                backgroundColor: "white"
                }}>
               <span  style={{
                fontWeight: "bold",
                margin: "0%",
               }}
               >+</span> 
            </button>
            <button style={{
                width: "40px",
                height: "40px",
                display: "inline-block",
                marginLeft: "3%",
                borderRadius: "100px",
                backgroundColor: "white"
                }}  onClick={() => setOnn(!onn)}>   { onn ? '🖤' : offf ? '🤍' : "" } 
            </button>
        </div>
    </div> 


    <div className="card">

        <img src="https://sun9-40.userapi.com/impg/mnXvG8pVxR1lbpKlVjS64Xpc4rO1zdPYVZAqCA/ElGMYLxuFKU.jpg?size=539x604&quality=95&sign=4e9f892ed15e6e84a302e474f92547ea&c_uniq_tag=y95uQ53QNPy8Olxq91vdPum-ySG8nfe08txqTIAJcXQ&type=album" className="kartinka_card"></img>
        <p  className="TextCard">Фулл сет на <span style={{
            color: "black",
            fontWeight: "bold",
            }}>“SLARK”</span>
        </p>
        <div>
            <span className="TextCard">Цена: <br/><span  className="TextCard" style={{
                color: "black",
                fontWeight: "bold",
                }}>12.000 рублей</span>
            </span> 
            <button style={{
                width: "40px",
                height: "40px",
                display: "inline-block",
                marginLeft: "30%",
                borderRadius: "10px",
                backgroundColor: "white"
                }}>
               <span  style={{
                fontWeight: "bold",
                margin: "0%",
               }}
               >+</span> 
            </button>
            <button style={{
                width: "40px",
                height: "40px",
                display: "inline-block",
                marginLeft: "3%",
                borderRadius: "100px",
                backgroundColor: "white"
                }}  onClick={() => setOnnn(!onnn)}>  { onnn ? '🖤' : offff ? '🤍' : "" } 
            </button>
        </div>
    </div>


    </div>





    </>
    )
}
export default Main












