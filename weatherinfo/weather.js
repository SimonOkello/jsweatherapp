const axios = require('axios');



const getWeatherInfo = async ( lat, lng ) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ latitude }&lon=${ longitude }&appid=32f843d833c38373032f825c4a92418a&units=metric`)

    return resp.data.main.temp;

}


module.exports = {
    getWeatherInfo
}