//Crear un objeto de persona: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género. Luego, muestra la información de esa persona por la consola.
const persona = {
    nombre: "Juan",
    edad: 25,
    genero: "Masculino"
}
console.log(persona);

//Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y indica el estado si esta en buen estado o no. Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo de dato que es.
const caja = {
    cuadernos: 5,
    lapices: 10,
    papel: 20,
    fotografias: 10,
    buenEstado: true
};

console.log(caja);
console.log(caja.cuadernos);
console.log(caja.lapices);
console.log(caja.papel);
console.log(caja.fotografias);
console.log(caja.buenEstado);
console.log(typeof(caja.cuadernos));
console.log(typeof(caja.lapices));
console.log(typeof(caja.papel));
console.log(typeof(caja.fotografias));
console.log(typeof(caja.buenEstado));