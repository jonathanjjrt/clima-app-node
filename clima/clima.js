const axios = require('axios');


const getClima = async(lat, lng) => {

    //https://api.openweathermap.org/data/2.5/weather?lat=18.8293226&lon=-99.2329347&units=metrics&appid=9400517804d72d20ff3e43e3aca045da
    //    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeURL }&key=AIzaSyCffTzoyP3y7mErmHQ0xxUelfy_UTKH9rA`);
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metrics&appid=9400517804d72d20ff3e43e3aca045da`);

    if (resp.data.code === '400') {
        throw new Error(`${ resp.data.code }`);
    }
    //var myjson = JSON.stringify(resp.data.main);
    //console.log(`clima ${ myjson }`);

    return resp.data.main.temp
}

module.exports = {

    getClima

}