import React, { Component } from 'react'
import {pictures} from '../pictures'

export default class WeatherCard extends Component {

    
    
    
rand = (obj) => {
    return Math.floor(Math.random() * obj.url.length)
  }
  chooseBackground = (pictures) => {
      
    let obj = pictures.find(picture => this.props.weather.description.split(' ').join('').includes(picture.weather))


    return obj.url[this.rand(obj)]
       
  }    
  render() {

      console.log(this.props.weather.description);
    
      
    return (
        <div className="weather-card" style={{backgroundImage: `url(${this.chooseBackground(pictures)})`}}>

            <div className="inner-weather-card">
              <p>Goodmorning, the weather in </p>
            <h1>{this.props.weather.city.toUpperCase()}</h1>
            <p>is mainly {this.props.weather.description}</p>
            <p>with a temperature of {this.props.weather.temperature}ºC.</p>
            <p>You can expect highs of {this.props.weather.temp_max}ºC</p>
            <p>and lows of {this.props.weather.temp_min}ºC</p>
            </div>
        </div>
    )

  }
    
}
