import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'

export default class CitySearchPage extends Component {
    // state = {
    //     country: '',
        
    // }

    // handleChange = (event) => {
    //     this.setState({
    //         country: event.target.value
    //     })
    // }

    render() {

        return (
            <div className="search-page">
                <h1>Choose a City</h1>
                <SearchBar handleChange={this.props.handleChange} country={this.props.country} handleSubmit={this.props.handleSubmit}/>
            </div>
        )
    }
}
