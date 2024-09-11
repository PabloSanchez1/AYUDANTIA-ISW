const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

// Imprimir el número mayor
const numMayor = Math.max(numero1, numero2, numero3);
console.log("El número mayor es:", numMayor);

// Imprimir el número menor
const numMenor = Math.min(numero1, numero2, numero3);
console.log("El número menor es:", numMenor);

// Función para verificar si un número es par o impar
function esPar(numero) {
    if (numero % 2 === 0) {
        return "par";
    }
    else return "impar";
}

// Imprimir si los números son pares o impares
console.log(`El numero1 ${esPar(numero1)}.`);
console.log(`El numero2 ${esPar(numero2)}.`);
console.log(`El numero3 ${esPar(numero3)}.`);

// Función para verificar si un número es múltiplo de 5
function esMultiploDeCinco(numero) {
    if (numero % 5 === 0) {
        return "múltiplo de 5";
    }
    else return "no es múltiplo de 5";
}

// Imprimir si los números son múltiplos de 5
console.log(`El numero1 es ${esMultiploDeCinco(numero1)}.`);
console.log(`El numero2 es ${esMultiploDeCinco(numero2)}.`);
console.log(`El numero3 es ${esMultiploDeCinco(numero3)}.`);