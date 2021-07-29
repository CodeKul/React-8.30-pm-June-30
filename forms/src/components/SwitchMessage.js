import React from 'react'

export default function SwitchMessage({on}) {
    return (
        <div>
            <div>The button is {on ? "on" : "off"}</div>
        </div>
    )
}
