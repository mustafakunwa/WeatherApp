const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (address) {
    geocode(address, (error, data) => {
        if (error)
            return console.log('Error:' + error);

        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error)
                return console.log('Error:', error)
            console.log(data.location);
            console.log('Data :', 'It is currently ' + forecastData.temperature + ' degrees out.There is ' + forecastData.precipProbability + '% chance of rain')
        })
    })
}
else {
    console.log('Please provide address');
}