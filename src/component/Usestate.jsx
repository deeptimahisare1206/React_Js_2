import React, { Component } from 'react'
export default class Usestate extends Component {
    constructor() {
        super();
        this.state = { name: "Deep", age: 19 }
    }

    ChangeDataOnButtonClick =() => {
        console.log(this.state.name);
        this.setState({ name: "Ranu"},
            () => {
                console.log(this.state);
            }
        )
    }
    render() {
        return (
            <div>
                <h2>My name is {this.state.name} and I am {this.state.age} years old.</h2>
                {/* <button onClick={() => this.ChangeDataOnButtonClick()}>Change Data</button> */}
                {/* <button onClick={ this.ChangeDataOnButtonClick.bind(this)}>Change Data</button>
                 */}
                <button onClick={ this.ChangeDataOnButtonClick}>Change Data</button>


            <img src={"../../B8.jpeg"}alt="no" width={400}/>

            </div>
        )
    }
}
