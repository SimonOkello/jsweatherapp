
const argv = require('./config/yargs').argv;
const place = require('./location/location');
const weather = require('./weather/weather');


let getInfo = async(address) => {

    try {
        
        let coors = await place.getPlaceLatLng(address);        
        let temp = await weather.getWeather(coors.lat, coors.lng);
        

        return `The Weather in ${coors.address} on ${Date(Date.now())} is ${temp}°C`;

    } catch (e) {
        return `We could not find Weather Info for:  ${address}`
    }
}

getInfo(argv.address)
    .then(message => console.log(message))
    .catch(err => console.log(err));