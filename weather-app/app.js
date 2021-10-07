const request = require('postman-request');
const geocode = require('./geocode.js');
const weatherinfo = require('./weatherinfo.js');

const url = 'http://api.weatherstack.com/current?access_key=acb9745f865f7949d2f00f27f17336e5&query=37.8267,-122.4233';

if (process.argv[2]) {
    geocode(process.argv[2],(err, geodata) =>{
        if (!err) {
            weatherinfo(geodata.latitude, geodata.longitude, (w_err, weather_data) => {
                if (!w_err) {
                    console.log('Current temperature at '+ geodata.location +' is ' + weather_data);
                }        
                else {
                    console.log('Error while fetching weather information for specified location: '+ w_err);
                }
            });
        }
        else {
            console.log('Error while fetching the location whose weather is expected: '+ err);
        }
    });
}
else {
    console.log('Please provide the location.');
}



