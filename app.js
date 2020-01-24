const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if (address) {
    geocode(address, (error, { latitude, longitude, location }) => {
        if (error)
            return console.log('Error:' + error);

        forecast(latitude, longitude, (error, { temperature, precipProbability }) => {
            if (error)
                return console.log('Error:', error)
            console.log(location);
            console.log('Data :', 'It is currently ' + temperature + ' degrees out.There is ' + precipProbability + '% chance of rain')
        })
    })
}
else {
    console.log('Please provide address');
}