// Tipos de datos en Javascript

// Primitivos
/**
 * > undefined: No es un tipo de dato, es un valor que representa la ausencia de valor o la ausencia de un objeto, lo asigna automáticamente Javascript cuando se declara una variable sin valor.
 * > symbol: Indica un valor único, nuevo en ES6
 * > bigint: Almacena números de precisión arbitrariamente grande (nuevo en ES2020)
 */
let nombre = "LuisFriDev" // string
let edad = 36 // number
let esMayorDeEdad = true // boolean
let noHayValor = null // null
let noDefinido = undefined // undefined
let simboloUnico = Symbol("valor_unico") // symbol
let numeroGrande = 1234567890123456789012345678901234567890n // bigint

// Complejos

// object
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
}

// array
let frutas = ["manzana", "banana", "naranja"]

// function
function saludar(nombre) {
    return `Hola, ${nombre}!`
}
