//const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

    try {

        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${ coors.direccion } es de ${ temp }`;

    } catch (e) {
        return `No se pudo determinar el clima en ${ coors.direccion }`;
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));

/*lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e));*/
//lat = "18.826275";
//lng = "-99.2329347";
/*clima.getClima(18.826275, -99.2329347)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e));*/

//console.log(argv.direccion);