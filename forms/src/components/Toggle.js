import React, { useState } from 'react'
import Switch from "./Switch"

export default function Toggle() {

    const [on, setOn] = useState(false)

    const toggle = () => {
        setOn(o => !o)
    } 
    return (
       <Switch on={on} onToggle={toggle}/>
    )
}



