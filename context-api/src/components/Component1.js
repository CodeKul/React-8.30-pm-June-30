import React, { Component } from 'react'

export default class Component1 extends Component {
    constructor(props) {
        super(props)

        this.state ={
            name: "codekul"
        }
    }
    render() {
        return (
            <div>
                <h1>Hello welcome to {this.state.name}</h1>
            </div>
        )
    }
}
