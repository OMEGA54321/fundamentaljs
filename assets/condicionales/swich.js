const type_payment = 'cash'

switch (type_payment){
   case 'cash':
    document.writeln('Tipo de pago con fectivo')
    break;
    case 'cc':
    document.writeln('Tipo de pago con tarjeta de credito')
    break;
    document.writeln('Sin tipo de pago')
    break;  
