import './App.css';
import { useState } from 'react';

function Lesson() {
    const [value, setValue] = useState(1);
    function changeHandler(event){
        setValue(event.target.value)
    }

    return <div>
        <input type="radio" name="radio" value="1" checked={value === "1" ? true : false} onChange={changeHandler}/>
        <input type="radio" name="radio" value="2" checked={value === "2" ? true : false} onChange={changeHandler}/>
        <input type="radio" name="radio" value="3" checked={value === "3" ? true : false} onChange={changeHandler}/>

    </div>;
    }

  export default Lesson;