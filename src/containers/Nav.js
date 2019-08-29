import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <ul>
                    <li><b>Home</b></li>
                    {/* <li>My Cities</li> */}
                    <li><b>Login</b></li>
                </ul>
            </div>
        )
    }
}
