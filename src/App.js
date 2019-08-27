import React, { Component } from 'react'
import Nav from './containers/Nav'
import CitySearchPage from './containers/CitySearchPage'
import WeatherCard from './components/WeatherCard'
import './App.css';
const weathers = [
    {country: 'london', 
    description: "scattered clouds",
    icon: "03d",
    id: 802,
    main: "Clouds",
    temperature: 25.08,
    temp_max: 28.89,
    temp_min: 22.22 
  },
  {country: 'hook', 
    description: "clear sky",
    icon: "01d",
    id: 800,
    main: "Clear",
    temperature: 24.02,
    temp_max: 26.67,
    temp_min: 21
  },
  {country: 'stockholm',
    description: "clear sky",
    icon: "01d",
    id: 800,
    main: "Clear",
    temperature: 23.93,
    temp_max: 25,
    temp_min: 23
  },
  {country: 'geneva',
    description: "clear sky",
    icon: "01d",
    id: 800,
    main: "Clear",
    temperature: 23.05,
    temp_max: 26.11,
    temp_min: 20
  }
]
export default class App extends Component {
  state = {
    page: 'home',
    country: '',
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
  filterWeather = (weathers) => {
    return weathers.find(weather => weather.country.toLowerCase().includes(this.state.country.toLowerCase()))
  }
  renderSwitch = () => {
    switch(this.state.page) {
      case 'home':
        return <CitySearchPage handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>;
      case 'weather':
        return <WeatherCard weather={this.filterWeather(weathers)}/>;  
      default:
        return null;
    }
  }
  render() {
    console.log(this.state.country);
    
    return (
      <div className="App">
        <Nav/>
        { this.renderSwitch() }
      </div>
    );
  }
  
}


