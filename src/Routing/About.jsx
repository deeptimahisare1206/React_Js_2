import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class About extends Component {
    render() {
        return (
            <div>
                <h1>About Page</h1>
                <Link to='/'>Home</Link>
                <Link to='/contact'>Contact</Link>

            </div>
        )
    }
}
