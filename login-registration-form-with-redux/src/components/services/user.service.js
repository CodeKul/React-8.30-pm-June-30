import config from "../../../webpack.config"

import {authHeader} from "../helpers"


export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update, 
    delete: _delete
}


function login (username, password) {
    const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({username, password})
    }

    return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
    .then(handleResponse)
    .then(user => {
        localStorage.setItem("user", JSON.stringify({user}))

        return user;
    })
}


function logout() {
    localStorage.removeItem("user")
}