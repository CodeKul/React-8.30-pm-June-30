import React, { Component } from 'react'
import Component1 from './Component1'

export default class Component2 extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Component1 name={this.props.name}/>
            </div>
        )
    }
}
