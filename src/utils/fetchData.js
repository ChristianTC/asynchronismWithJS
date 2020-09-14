//importamos el modulo para hacer las peticiones
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

// funcion principal
const fetchData = (url_api) => {
    return new Promise((resolve,  reject) => {
        //instanciamos la conexion
        const xhttp = new XMLHttpRequest();
        //abrimos una conexion con (el metodo, la ruta, si es asincrono)
        xhttp.open('GET', url_api, true)
        // validacion del llamado
        xhttp.onreadystatechange = (() =>  {
            //si el state 4 es la ultima de las peticiones
            if(xhttp.readyState === 4) {
                //Si el estado es 200, que significa que todo esta bien
                // si no es 200 entonces se devuelve el reject
                (xhttp.status === 200 )
                    ? resolve(JSON.parse(xhttp.responseText))
                    : reject(new Error('Error ', url_api))
            }
        })
        // enviamos la peticion
        xhttp.send();
    })
};
//exportamos fetchData
module.exports = fetchData;