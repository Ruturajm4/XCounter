import React, {useState} from "react";

const Xcounter = ()=>{
    const [count, setCount]=useState(0)

    const handleIncrement= ()=>{
        setCount((prev)=>prev+1)
    }

    const handleDecrement = ()=>{
        setCount((prev)=>prev-1)
    }

    return(
        <div>   
            <h3>Counter App</h3>

            <p>Count: {count}</p>

            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default Xcounter