import React, {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    const [name, setName] = useState("Swati");

    const [arr, setArr] = useState([]);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const [obj, setObj] = useState({});

    const handleInc = () => {
        setCount((prev) => prev +1);
    }

    const handleDec = () => {
        setCount(count -1);
    }
    
    
    return (
        <div>
            
            <h1>Counter App</h1>
            {count}

           <br/>
           <br />
            <button onClick={handleInc}>Increment</button>
            <button onClick={handleDec}>Decrement</button>
        </div>
    )
}
