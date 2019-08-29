import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'

export default class CitySearchPage extends Component {

    render() {

        return (
            <div className="search-page" style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqhq9_T5aAgkc_DW6aCG-OhsVm2lPgcMS5A3AaGaH-g1MWD5cKkg)`}}>
                <h1 style={{color:"white"}}>Choose a City</h1>
                <SearchBar handleChange={this.props.handleChange} country={this.props.country} handleSubmit={this.props.handleSubmit}/>
            </div>
        )
    }
}
