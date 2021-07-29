import React, { useState, createContext } from 'react'

export const UserContext = createContext();



export const UserProvider = (props) => {
    const [userInput, setUserInput] = useState({
        userName: '',
        destination: 'UI-UX DEV'
    })
    const [userData, setUserData] = useState([])
    
    return (
        <UserContext.Provider value={[userInput, setUserInput]}  >
            {props.children}
        </UserContext.Provider >
    )
}

