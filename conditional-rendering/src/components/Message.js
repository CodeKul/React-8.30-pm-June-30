import React from 'react'

export default function Message(props) {
    if (props.isLoggedIn)   
        return <h1>Welcome Back!!!</h1>;   
    else  
        return <h1>Please Login First!!!</h1>;   
}
