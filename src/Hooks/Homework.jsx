import React, { Component } from 'react'
import { useState } from 'react'
export default class Homework extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    clickEvent = () => {
        // alert();
        let count = 0;
        this.setcount = count + 1;
        console.log(this.setcount)

    }

    render() {
        return (
            <div>
                <hr />
                <button onClick={this.clickEvent}>ADD</button>
                {/* <button onClick={this.clickEvent.bind(this)}>-</button> */}

            </div>
        )
    }
}
