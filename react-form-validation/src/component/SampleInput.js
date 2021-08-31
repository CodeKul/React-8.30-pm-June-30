import React, { useEffect, useRef, useState } from 'react'

export default function SampleInput() {
    const [name, setName] = useState("Ravi")

    const input = useRef()

    useEffect(() => {
        input.current.onkeyup = handleChange;
        input.current.value = name;
    })


    const handleChange = (e) => {
e.preventDefault();
setName(e.target.value)
    }
    return (
        <div>
           
                <input 
                ref={input}
                onChange={handleChange} type="text" />
          

            <div>Name is : {name}</div>
        </div>
    )
}
