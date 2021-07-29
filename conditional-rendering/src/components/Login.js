import React from 'react'

export default function Login(props) {
    console.log(props)
    return (
        <div>
            <button onClick={props.displayLogin} className="btn btn-primary">Login</button>
        </div>
    )
}
