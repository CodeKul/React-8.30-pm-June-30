import React from 'react'

export default function Flex() {
    return (
        <div style={{backgroundImage: `url("https://images.unsplash.com/photo-1631166146657-2fc293f71bf8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1481&q=80)`}} className="bg-success shadow m-5">
            
            <div className=" bg-primary text-white opacity-25">
                <p>One</p>
                <p>Two</p>
                <p>Three</p>

            </div>

            <div className="d-inline-flex">
            <p>Four</p>
                <p>Five</p>
                <p>Six</p>
            </div>
        </div>
    )
}
