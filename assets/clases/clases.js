class Perro {
    constructor(nombre){
        this.nombre = nombre;
    }
    //modelo
    hablar(){
        document.writeln(this.nombre + 'ladra.');
    }
}
var mascota_1 = new Perro('Pancho');
mascota_1.hablar();//Pancho ladra.
document.writeln('</br>');
var mascota_2 = new Perro('Kika');
mascota_2.hablar();//Kika ladra.

