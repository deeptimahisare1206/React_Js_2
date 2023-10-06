import React, { Component } from 'react'
import Card from './card'

export default class Manul extends Component {
  constructor() {
    super();
    this.state = {
      listRender: [
        { name: "Deep", age: 18 },
        { name: "Ranu", age: 18 },
        { name: "Ram", age: 23 },
        { name: "Lakshman", age: 24 }

      ], isShow: true
    }
  }

  showHide() {
    // alert();
    this.setState({ isShow: !this.state.isShow },
      //  ()=>console.log(this.state)
    )
  }

  removeHandler = (index) => {
    // alert();
    // console.log(index)
    let list = this.state.listRender;
    list.splice(index, 1);
    this.setState({ listRender: list })
  }
  // manual method
  render() {
    let useMap;
    if (this.state.isShow) {
      useMap = this.state.listRender.map((p, index) =>
        <Card key={index} name={p.name} age={p.age} remove = {()=> this.setState.removeHandler()} />);
    }
    else {
      useMap = "";
    }
    return (

      <div>
        <button className='SHB' onClick={() => this.showHide()}>Show/Hide</button>
        {useMap}
        {/* <Card name={this.state.listRender[0].name} age ={this.state.listRender[0].age}/>
        <Card name={this.state.listRender[1].name} age ={this.state.listRender[1].age}/>
        <Card name={this.state.listRender[2].name} age ={this.state.listRender[2].age}/>
       <Card name={this.state.listRender[3].name} age ={this.state.listRender[3].age}/> */}


      </div>
    )
  }
}
