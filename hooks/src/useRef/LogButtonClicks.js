import React, { useRef, useState } from 'react'

export default function LogButtonClicks() {
  //  const countRef = useRef(0);

    const [count, setCount] = useState(0)

    const handleClick = () => {
        //const updatedCount = count+1;
       
        setCount(count + 1)
        console.log(`Clicked ${count} times`)
    }

    // const handleClick = () => {
    //     countRef.current++;
    //     console.log(`Clicked ${countRef.current} times`);
    // };

    console.log("component rendered")
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
