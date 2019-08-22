import React from 'react'

export default function SearchBar(props) {

    return (
        <div className="search-bar">
            <form
            onSubmit={props.handleSubmit()}
            >
            <input 
            type="text"
            value={props.searchTerm}
            onChange={(event) => props.handleChange(event)}
            placeholder="Search Cities"></input>
            </form>
        </div>
    )
}
