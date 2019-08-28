import React, { Component } from 'react'
import Nav from './containers/Nav'
import CitySearchPage from './containers/CitySearchPage'
import WeatherCard from './components/WeatherCard'
// import {pictures} from './pictures.js'
import './App.css';
const weathers = [
    {city: 'london', 
    description: "scattered clouds",
    icon: "03d",
    id: 802,
    main: "Clouds",
    temperature: 25.08,
    temp_max: 28.89,
    temp_min: 22.22 
  },
  {city: 'hook', 
    description: "clear sky",
    icon: "01d",
    id: 800,
    main: "Clear",
    temperature: 24.02,
    temp_max: 26.67,
    temp_min: 21
  },
  {city: 'stockholm',
    description: "clear sky",
    icon: "01d",
    id: 800,
    main: "Clear",
    temperature: 23.93,
    temp_max: 25,
    temp_min: 23
  },
  {city: 'geneva',
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
    city: '',
    weather: {},
  }

  handleSubmit = () => {
    this.setState({
      page: 'weather',
      weather: this.filterWeather(weathers)
    })
  }
  
  handleChange = (event) => {
    this.setState({
        city: event.target.value
    })
}
  filterWeather = (weathers) => {
    return weathers.find(weather => weather.city.toLowerCase().includes(this.state.city.toLowerCase()))

  }

  // rand = (obj) => {
  //   return Math.floor(Math.random() * obj.url.length)
  // }
  // chooseBackground = (pictures) => {
  //   let obj = pictures.find(picture => picture.weather.includes(this.state.weather.description))
  //   return obj.url[this.rand(obj)]
  // }

  renderSwitch = () => {
    switch(this.state.page) {
      case 'home':
        return <CitySearchPage handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>;
      case 'weather':
        return <WeatherCard weather={this.state.weather} />;  
      default:
        return null;
    }
  }

  
  render() {

    
    return (
      <div className="App">
        <Nav/>
        { this.renderSwitch() }
      </div>
    );
  }
  
}


