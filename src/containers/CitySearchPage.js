import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'

export default class CitySearchPage extends Component {
    state = {
        country: '',
    }

    handleChange = (event) => {
        this.setState({
            country: event.target.value
        })
    }

    handleSubmit = () => {
        console.log('hello')
    }
    render() {
        console.log(this.state.country)
        return (
            <div className="search-page">
                <h1>Choose a City</h1>
                <SearchBar handleChange={this.handleChange} country={this.state.country} handleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
