//Crea una función que reciba un string y retorne el string en mayúsculas.
const string = `hola mundo`;
function hacerMayus(string){
    return string.toUpperCase();
}  
console.log(hacerMayus(string));

//Crea una función que reciba un string y retorne el string en minúsculas.
const string2 = `Hola Mundo`;
function hacerMinus(string){
    return string.toLowerCase();
}  
console.log(hacerMinus(string2));

//Crear una función que reciba como parámetro 2 números y los reste.
const int = 2
const int2 = 3
function restar(int, int2){
    return int - int2;
}
console.log(restar(int, int2));

//Crear una función que reciba como parámetro 2 números y los divida.
function divida(int, int2){
    return int / int2;
}
console.log(divida(int, int2));

//Crear una función que reciba como parámetro 2 números y los multiplique.
function multiplica(int, int2){
    return int * int2;
}
console.log(multiplica(int, int2));

//Crear una función que reciba un string y devuelva la longitud del string.
const string3 = `Hola Mundo`;
function largoString(string){
    return string.length;
}
console.log(largoString(string3));
