
import { useState } from 'react';




function Card(props) {
const [on, setOn] = useState(false);
const [off, setOff] = useState(true);



       return <div className="card" >

                            <img src={props.img} className="kartinka_card"></img>
                            <p className="TextCard">Фулл сет на <span style={{
                                color: "black",
                                fontWeight: "bold",
                            }}>{props.name}</span>
                            </p>
                            <div>
                                <span className="TextCard">Цена: <br /><span className="TextCard" style={{
                                    color: "black",
                                    fontWeight: "bold",
                                }}>{props.cost}</span>
                                </span>
                                <button style={{
                                    width: "40px",
                                    height: "40px",
                                    display: "inline-block",
                                    marginLeft: "30%",
                                    borderRadius: "10px",
                                    backgroundColor: "white"
                                }}>
                                    <span style={{
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
                                }} onClick={() => setOn(!on)}>   {on ? '🖤' : off ? '🤍' : ""}
                                </button>
                            </div>
                        </div>
}

export default Card