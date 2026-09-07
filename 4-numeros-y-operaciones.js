// Numeros y operaciones en Javascript

// 1. Tipo entero y decimal
const entero = 10
const decimal = 10.5

console.log(typeof entero, typeof decimal) // da como resultado number, number

// 2. Notación científica
const cientifico = 5e3 // 5 * 10^3 = 5000

// 3. Infinitos y NaN
const infinito = Infinity
const noEsUnNumero = NaN

// Operaciones matemáticas

// 1. Suma, resta, multiplicación y división
const suma = 10 + 5
const resta = 10 - 5
const multiplicacion = 10 * 5
const division = 10/5

// 2. Módulo y exponenciación/potencia
const modulo = 10 % 3 
const exponenciacion = 2 ** 3 // 2^3 = 8

// Precisión (javascript tiene problemas de precisión con los decimales)
const resultado = 0.1 + 0.2 // da como resultado 0.30000000000000004
console.log(resultado) // para solucionar esto se puede usar el método toFixed() que redondea el número a la cantidad de decimales que se le indique
console.log(resultado.toFixed(1)) // da como resultado 0.3, pero devuelve un string, para convertirlo a número se puede usar el método parseFloat() o Number()
console.log(parseFloat(resultado.toFixed(1))) // da como resultado 0.3
console.log(Number(resultado.toFixed(1))) // da como resultado 0.3

// Operaciones avanzadas
const raizCuadrada = Math.sqrt(9) // da como resultado 3
const valorAbsoluto = Math.abs(-10) // da como resultado 10
const aleatorio = Math.random() // da como resultado un número aleatorio entre 0 y 1
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)