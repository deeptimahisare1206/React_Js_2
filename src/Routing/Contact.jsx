import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <h1>Contact Page</h1>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </div>
        )
    }
}
