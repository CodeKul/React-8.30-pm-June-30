import React from 'react'
import SwitchButton from './SwitchButton'
import SwitchMessage from './SwitchMessage'

export default function Switch({on, onToggle}) {
    return (
        <div>
            {/* <div>The button is {on ? "on" : "off"}</div> */}
        {/* <button onClick={onToggle}>Toggle</button> */}

        <SwitchMessage on ={on} />
        <SwitchButton onToggle={onToggle}/>
        </div>
    )
}
