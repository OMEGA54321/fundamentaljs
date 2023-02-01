let currencies = ['MXN','USD','EUR','CAD']
console.log(currencies);

//Conocer el tamaño de un arreglo lenght
let size = currencies.length;

//si quiero acceder al ultima posicion del arreglo
let last = currencies [currencies.length - 1 ]
console.log(last)

//Agregar una moneda en la ultima posicion
let new_lenght = currencies.push('JPY')
console.log({new_lenght, currencies})

//Agregar un nuevo valor al inicio del arreglo
new_lenght = currencies.unshift('GBP')
console.log({new_lenght, currencies})