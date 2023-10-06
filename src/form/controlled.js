import React, { Component } from 'react'

export default class Controlled extends Component {
    constructor(){
        super();
        this.state = {
            name:"deep"
        }
    }
    changeHandler =(e) =>{
        // alert();
        console.log(this.state);
        let name = e.target.value;
        this.setState({name},()=>{
            console.log("New",this.state)
        }) 
    }
  render() {
    return (
      <div>
        Name: <input type="text" value = {this.state.name} onChange = {this.changeHandler}/>
      </div>
    )
  }
}
