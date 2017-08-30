var React = require('react');
var queryString = require('query-string');
var Icons = require('./Images');
var api = require('../utils/api');

class Weather extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            city_name: "",
            country: "",
            weather:[]
        }
        this.weatherApiCall = this.weatherApiCall.bind(this);
    };

    componentDidMount() {
        var city = queryString.parse(this.props.location.search).city_name;
        this.weatherApiCall(city);
    };
    componentWillReceiveProps(nextProps){
        var city = queryString.parse(nextProps.location.search).city_name;
        if(this.state.city_name !== city){
            this.weatherApiCall(city);
        }else{
            return false;
        }
    }

    weatherApiCall(city){
        api.fetchWeather(city)
            .then(function(weather){
                console.log(weather);
                this.setState(function(){
                    return{
                        city_name: weather.city.name,
                        country: weather.city.country,
                        weather: weather.list
                    };
                })
            }.bind(this));
    };

    render(){
        var city = this.state.city_name;
        var country = this.state.country;
        var weather = this.state.weather;
        return(
            <div className="weather-container">
                <h1 className="headline">Weather in: {city}, {country}</h1>
                <div className="days-container">
                    <ul className="weather-day">
                        {weather.map(function(day,i){
                            return(
                                <li key={day.dt}>
                                    <ul className="day-ul"> 
                                        <li><img class="img-fluid" src={Icons["img_"+day.weather[0].icon]} alt={"icon of "+ day.weather[0].main}/></li>
                                        <li>Weather: {day.weather[0].main}</li>
                                        <li>Forecast: {day.weather[0].description}</li>
                                        <li>Temp Max: {day.temp.max}</li>
                                        <li>Temp Min: {day.temp.min}</li>
                                        <li>Pressure: {day.pressure}</li>
                                        <li>Humidity: {day.humidity}</li>
                                    </ul>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>   
        );
    };
    
};

module.exports = Weather;