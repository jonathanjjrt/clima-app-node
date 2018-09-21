const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodeURL = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeURL }&key=`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad`);
    }

    let location = resp.data.results[0];
    let cors = resp.data.results[0].geometry.location;

    //console.log(`Dirección ${location.formatted_address}`);
    //console.log(`lat ${cors.lat}`);
    //console.log(`lng ${cors.lng}`);


    return {
        direccion: location.formatted_address,
        lat: cors.lat,
        lng: cors.lng
    }
}

module.exports = {
    getLugarLatLng
}