import React from 'react'

export default function Logout(props) {
    return (
        <div>
             <button onClick={props.displayLogout} className="btn btn-primary">Logout</button>
        </div>
    )
}
