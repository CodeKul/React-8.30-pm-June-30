import React, { Component } from 'react'
import Login from './Login';
import Logout from './Logout';
import Message from './Message';
import Welcome from './Message';
import AuthButton from './switch/AuthButton';

export default class HandleLogin extends Component {


    // conditional rendering can be done with the help of 
    // 1) if else
    // 2) ternary operator 
    // 3) && operator 
    // 4) element variables
    // 5)enum
    // 6)switch case

    constructor() {
        super();
        this.state = {
            isLoggedIn: true,
        }
    }


    handleLogin = () => {
        this.setState({isLoggedIn:!this.state.isLoggedIn});
    }


    handleLogout = () => {
        this.setState({isLoggedIn: !this.state.isLoggedIn});
    }


    render() {
        let element;

        // if (this.state.isLoggedIn) {
        //     element = <Logout displayLogout={this.handleLogout}/>
            
        // } else {
          

        //     element = <Login displayLogin={this.handleLogin}/>
        // }

        (this.state.isLoggedIn) ? (
            element = <Logout displayLogout={this.handleLogout}/>
         ) : (element = <Login displayLogin= {this.HandleLogin}/>)

        return (
            <div>

                <Message isLoggedIn = {this.state.isLoggedIn}/>
                {element}

                <AuthButton/>
            </div>
        )
    }
}
