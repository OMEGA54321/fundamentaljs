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

//Crear un nuevo valor en el areglo 
let new_lenght_ = currencies.push('JPY')
console.log({new_lenght_, currencies})

//Agrega un valor al inicio
let add_init = currencies.unshift('NZD')

//Borra la ultima posicion 
let delate_last_pos = currencies.pop()


let number =  []
let  num_1 = prompt('Introduce el numero 1')
number.push(num_1);

let  num_2 = prompt('Introduce el numero 2')
number.push(num_2);

let  num_3 = prompt('Introduce el numero 3')
number.push(num_3);

let suma = Number(number[0]) + parseInt(number[1]) + parseFloat(number[2])
document.write