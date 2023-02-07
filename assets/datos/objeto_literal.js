let invoice = { number: '1',
client: 'LIVINGLAB',
currency: 'USD',
coords: {
lat: 42.0,
lon: -108.61
},
services: ['LAPTOPS', 'COFFE', 'GAS', 'INTERNET'],
location: {cp: '31100', address: 'AV AMERICAS'},
subtotal: 500,
IVA: 80
}
console.log(invoice)
//Podemos acceder a metodos de diferentes maneras
console.log('Cliente:', invoice.client);
console.log('Cliente:', invoice ['client'] );
console.log('Latitud:', invoice.coords. lat );
//Calcula el ultimo servicio que le ofrecemos a la empresa
console.log('Ultimo Servicio: ',
invoice.services [invoice.services.length -1 ] );

document.writeln(invoice.client)
document.writeln('<dr>')
document.writeln(invoice['client'])
document.writeln('<dr>')
document.writeln(invoice.coords.lat)
document.writeln('<dr>')
document.writeln.invoice.services[1]
document.writeln('<dr>')
document.writeln(invoice.services[invoice.services.length -1])

//
delete invoice.IVA