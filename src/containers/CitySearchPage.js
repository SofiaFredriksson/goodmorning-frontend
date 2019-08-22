import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'

export default class CitySearchPage extends Component {
    state = {
        country: '',
    }

    handleChange = (event) => {
        console.log(event.target.value);
        
    }
    render() {
        return (
            <div className="search-page">
                <h1>Choose a City</h1>
                <SearchBar handleChange={this.handleChange} country = {this.state.country}/>
            </div>
        )
    }
}
