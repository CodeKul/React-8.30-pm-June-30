import React, { Component } from 'react'

export default class ThirdComponent extends Component {

    constructor(props) {
        console.log("Inside Constructor")

        super(props);

        this.state = {
            Counter:0
        };

        this.increment = () => this.setState({Counter: this.state.Counter + 1});
        this.decrement = () => this.setState({Counter: this.state.Counter - 1});
    }


    componentDidMount() {
        console.log("Component Did Mount or has been mounted");
        console.log("==========================================")
    }

    shouldComponentUpdate(nextProps, nextState, snapshot) {
        return true;
        console.log("Component Should Update");
        console.log("==========================================")

    }

    componentDidUpdate(){
        console.log("Component Did Update")
        console.log("==========================================")

    }

    componentWillUnmount() {
        console.log("Component Will Unmount or Removed..")
        console.log("==========================================")
    }

    render() {
        console.log("renderer")
        return (
            
            <div>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
           
           <div className="counter">Counter :{this.state.Counter}</div>
           
            </div>
        )
    }
}
