import React, { useState, useEffect, useContext } from 'react'
import Profile from '../Profile'

import { UserContext } from '../UserContext'

function Home() {
    // const { useSubmitHaandel } = useContext(UserContext)


    console.log(UserContext)

    const [userInput, setUserInput] = useContext(UserContext)
    const [userData, setUserData] = useContext(UserContext)

    const onchangeHandler = (e) => {
        const target = e.target
        const name = target.name
        const value = target.value
        setUserData({
            ...userData,
            [name]: value
        })
    }
    const useSubmitHaandel = (e) => {
        e.preventDefault()
        const nwUserData = { ...userData, id: new Date().getTime().toString() }
        
        const target = e.target
        const name = target.name
        const value = target.value
        
        setUserData({
            ...userData,
            [name]: value
        })
        
        console.log(nwUserData)
        console.log(userData)
    }

    return (
        <div className="rm-profile">
            <h4>Profile</h4>
            <form action="" onSubmit={useSubmitHaandel}>
                <input
                    type="text"
                    className="mb-2 form-control"
                    placeholder="UserName"
                    name="userName"
                    value={userData.userName}
                    onChange={onchangeHandler}
                />
                <input
                    type="text"
                    className="mb-2 form-control"
                    placeholder="destination"
                    name="destination"
                    value={userData.destination}
                    onChange={onchangeHandler}
                />
                <button type="submit" className="btn btn-outline-success">Submt</button>

            </form>
        </div>
    )
}

export default Home

