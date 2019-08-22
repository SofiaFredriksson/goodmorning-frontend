import React, { Component } from 'react'
import Nav from './containers/Nav'
import CitySearchPage from './containers/CitySearchPage'
import WeatherCard from './components/WeatherCard'
import './App.css';

export default class App extends Component {
  state = {
    page: 'home',
    country: ''
  }

  handleSubmit = () => {
    this.setState({
      page: 'weather'
    })
  }
  
  handleChange = (event) => {
    this.setState({
        country: event.target.value
    })
}

  rednerSwitch = () => {
    switch(this.state.page) {
      case 'home':
        return <CitySearchPage handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>;
      case 'weather':
        return <WeatherCard/>;  
      default:
        return null;
    }
  }
  render() {
    console.log(this.state.page);
    
    return (
      <div className="App">
        <Nav/>
        { this.rednerSwitch() }
      </div>
    );
  }
  
}


