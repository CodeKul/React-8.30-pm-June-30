import React, { Component } from 'react'
import Component2 from "./Component2"

export default class Component3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <Component2 />
            </div>
        )
    }
}
