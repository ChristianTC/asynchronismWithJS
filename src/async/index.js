//creamos la funcion
const doSomethingAsync = () => {
    //establecemos la promesa
    return new Promise((resolve, reject) => {
        //Si es verdadero obtenemos el resolve en 3 segundos
        (true)
            ? setTimeout(() => resolve('Do Something Async'),3000)
            : reject(new Error('Test Error'))
    })
}

//creamos la funcion con async
const doSomething = async () => {
    //crear constante con el await
    const something = await doSomethingAsync()
    //imprimimos la constante something
    console.log(something);
}

//imprimimos 2 strings Before y After, y en medio ejecutamos la funcion doSomething()
console.log('Before');
doSomething()
console.log('after');

//creamos otra funcion utilizando try catch
const anotherFunction = async () => {
    try{
        const something = await doSomethingAsync()
        console.log(something);
    }catch (error){
        console.error(error);
    }
} 

console.log('Before1');
anotherFunction()
console.log('after1');