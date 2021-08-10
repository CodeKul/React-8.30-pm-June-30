import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from 'redux';

import {userActions} from "../actions/user.actions"



export default function HomePage() {

    const users = useSelector(state=> state.users);
    const user = useSelector(state=> state.authentication.user);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(userActions.getAll())
    }, []);

    function handleDelete(id) {
        dispatch(userActions.delete(id))
    }


    return (
        <div className="col-lg-8 offset-lg-2">

            <h1>Hi {user.firstName}..!</h1>
            <p>You're are logged in with React hook & Redux..!!</p>

            <h3>All registered users: </h3>
            {users.loading && <em>Loading users...</em>}
            {users.error && <em className="text-danger">Error: {users.error}</em>}


            {users.items &&  
            <ul>
                {users.items.map((user,index) => 
                {
                    return(

                        <li key={user.id}>
                        {user.firstName + "" + user.lastName}

                        {
                            user.deleting ? <em> Deleting...</em>
                            : user.deleteError ? <span>ERROR: {user.deleteError}</span>
                            : <span> - <a  onClick={() => handleDelete(user.id)}>Delete</a></span>
                        }
                        </li>
                        
                        )
                 
                })}
            </ul>
            }


            <p>
                <Link to="/logout">Logout</Link>
            </p>
            
        </div>
    )
}
