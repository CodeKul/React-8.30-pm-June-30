import React, { Component } from 'react'
import {Link} from "react-router-dom"
import ThirdComponent from './ThirdComponent';

export default class FourthComponent extends Component {


    constructor (props) {

        console.log("Inside constructor...")
        super(props);
        this.state = {
            data: "Codekul"
        }
    }

    getData() {
        setTimeout(() => {
            console.log("Our data is fetched - Component Did Mount");

            this.setState(
            
                {
                data: "Hello Welcome to Codekul..."
                
            })
        }, 1500)
    }


    componentDidMount(){
        this.getData()
    }


    componentWillMount() {
        console.log("First this is called - Component Will Mount method")
    }

    componentWillUnmount() {
        console.log("Component Will unmount")
    }
    render() {
        return (
            <div>
                {this.state.data}

                <Link to="/third">Third Component</Link>

                <Link to="/fourth">Fourth Component</Link>


                
                            </div>
        )
    }
}
