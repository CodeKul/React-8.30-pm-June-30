import React, { useRef } from 'react'

export default function InputFocus() {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.focus();
        inputRef.current.style.backgroundColor="green"
        inputRef.current.style.color="white"
        
    }

    console.log(inputRef)
    return (
        <div>
            
            <label htmlFor="">Enter value</label>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Focus</button>
        </div>
    )
}
