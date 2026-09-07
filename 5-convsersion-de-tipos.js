// Conversión de tipos en Javascript

// Explicit Type Casting

// String to Number
const string = '42'
const integer = parseInt(string)
console.log(integer) // 42
console.log(typeof integer) // number

// String to decimal
const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(float) // 3.14
console.log(typeof float) // number

// String to binary
const binary = '1010'
const decimal = parseInt(binary, 2)
console.log(decimal) // 10
console.log(typeof decimal) // number

// Implicit Type Casting
/**
 * Siempre que hay un string el casting dará prioridad al string, por lo que el resultado será un string.
 * Cuando no haya un string, el casting dará prioridad al número, por lo que el resultado será un número.
 */

const sum = '5' + 3
console.log(sum) // 53

const sumWithBoolean = '5' + true
console.log(sumWithBoolean) // 5true

const sumWithNumber = 2 + true;
console.log(sumWithNumber) // 3

const stringValue = '10'
const numberValue = 10
const booleanValue = true
console.log('==============================')
console.log(stringValue + stringValue) // 1010
console.log(stringValue + numberValue) // 1010
console.log(stringValue + booleanValue) // 10true
console.log(numberValue + stringValue) // 1010
console.log(numberValue + numberValue) // 20
console.log(numberValue + booleanValue) // 11
console.log(booleanValue + stringValue) // true10
console.log(booleanValue + numberValue) // 11
console.log(booleanValue + booleanValue) // 2

// Ejercicio
const numero = '596'
const numeroConvertido = parseInt(numero)

console.log(typeof numero) // 596
console.log(typeof numeroConvertido) // number