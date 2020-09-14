//importamos el modulo para hacer las peticiones
let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

// direccion de la api
let API = 'https://rickandmortyapi.com/api/character/'

// funcion principal
function fetchData(url_api, callback) {
    //instanciamos la conexion
    let xhttp = new XMLHttpRequest();
    //abrimos una conexion con (el metodo, la ruta, si es asincrono)
    xhttp.open('GET', url_api, true)
    // validacion del llamado
    xhttp.onreadystatechange = function (event) {
        //si el state 4 es la ultima de las peticiones
        if(xhttp.readyState === 4) {
            //Si el estado es 200, que significa que todo esta bien
            if(xhttp.status === 200) {
                //el primero es el valor de error y el siguiente es el resultado
                //ejecutamos el callback con el resultado
                callback(null, JSON.parse(xhttp.responseText))
            } else {
                //Si no es 200
                const error = new Error('Error ' + url_api);
                //acaba el proceso con un error
                return callback(error, null)
            }
        }
    }
    // enviamos la peticion
    xhttp.send();
}

// buscamos la lista de personajes
fetchData(API, function (error1, data1) {
    //si es error, retornamos el error
    if(error1) return console.error(error1)
    // buscamos en la api el id de Rick
    fetchData(API + data1.results[0].id, function (error2, data2) {
        //si es error, retornamos el error
        if(error2) return console.error(error2)
        //buscamos la dimension
        fetchData(data2.origin.url, function (error3, data3) {
            //si es error, retornamos el error
            if (error3) return console.error(error3);
            //RESULTADOS
            console.log(data1.info.count)
            console.log(data2.name);
            console.log(data3.dimension);

            // rutas de las peticiones
            console.log(API);
            console.log(API + data1.results[0].id);
            console.log(data2.origin.url);
        })
    })
})