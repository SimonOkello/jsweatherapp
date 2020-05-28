const axios = require('axios');


const getLatitudeLongitude = async( dir ) => {

    const encodedUlr = encodeURI( dir );
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUlr }`,
        headers: {'X-RapidAPI-Key': '55acc77c40mshd99a59570c38426p19765fjsn34c18015c0a6'}
      });
    
    const resp = await instance.get();

    if (  resp.data.Results.length === 0 ) {
        throw new Error(`We could not find results for: ${ dir }`);
    }

    const data      = resp.data.Results[0];
    const address = data.name; 
    const lat = data.lat; 
    const lng = data.lon; 


    return {
        address,
        lat,
        lng
    }
}


module.exports = {
    getLatitudeLongitude
}

