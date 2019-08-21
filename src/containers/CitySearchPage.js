import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'

export default class CitySearchPage extends Component {
    render() {
        return (
            <div className="search-page">
                <h1>Choose a City</h1>
                <SearchBar/>
            </div>
        )
    }
}
