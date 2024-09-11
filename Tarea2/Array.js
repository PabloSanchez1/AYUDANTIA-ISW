const numeros = [1, 2, 3, 4, 5]

//Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.
function sumaNumeros(numeros){
    let suma = 0;
    for (let i = 0; i < numeros.length; i++){
        suma += numeros[i];
    }
    return suma;
}
console.log(sumaNumeros(numeros))

//Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
function promNumeros(numeros){
    let suma = 0;
    for (let i = 0; i < numeros.length; i++){
        suma += numeros[i];
    }
    return suma / numeros.length;
}
console.log(promNumeros(numeros))
//Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
const stringArray = ["hola", "mundo"]
function stringArrayMayus(string){
    let newArray = [];
    for (let i = 0; i < string.length; i++){
        newArray.push(string[i].toUpperCase());
    }
    return newArray;
}
console.log(stringArrayMayus(stringArray))

//Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.
const numeros2 = [1, 2, 3, 4, 5]
function paresArray(numeros){
    let newArray = [];
    for (let i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 === 0){
            newArray.push(numeros[i]);
        }
    }
    return newArray;
}
console.log(paresArray(numeros2))