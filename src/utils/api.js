var axios = require('axios');

module.exports = {
  fetchWeather: function(city_name){
     var encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/forecast/daily?q='+ city_name +'&type=accurate&APPID=285dfc810676c2c67fd1ef3802d7cd1e&cnt=5');
     return axios.get(encodedURI)
      .then(function(response){
        return response.data;
      });
  }
}
