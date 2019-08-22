import React from 'react'

export default function SearchBar(props) {

    return (
        <div className="search-bar">
            <input 
            type="text"
            value={props.searchTerm}
            onChange={(event) => props.handleChange(event)}
            placeholder="Search Cities"></input>
        </div>
    )
}
