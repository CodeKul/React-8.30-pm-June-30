import React from 'react'
import {useDispatch, useSelector} from "react-redux";

export default function Login() {

    const dispatch = useDispatch();
    const login = useSelector((state) => state.auth)
    console.log(login)
    return (
        <div>
            <form action="">
                <input
                className="form-control"
                placeholder="username"
                type="text" />

                <input 
                className="form-control"
                placeholder="password"
                type="password" />

                <button
                className="btn btn-primary"
                onClick={() => dispatch({type: "login"})}
                >
                    {login.isLoggedIn ? "Logout" : "Login"}
                </button>
            </form>
        </div>
    )
}
