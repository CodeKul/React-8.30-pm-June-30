import React from 'react'

export default function SwitchButton({onToggle}) {
    return (
        <div>
            <button onClick={onToggle}>Toggle</button>
        </div>
    )
}
