import React, { Component } from 'react'

export default class StateExample extends Component {

    constructor(){
        super()
        this.state= {
            message: "Welcome To React talks"
        }
    }

    changeMessage() {
        this.setState({
            message: "Thanks for Subscribing...!!"
        }) 
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>

                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}
