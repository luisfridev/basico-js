# Tipos de datos en Javascript

## Primitivos

### __string__
```
let nombre = "LuisFriDev"
``` 

### __number__
```
let edad = 36
```

### __boolean__
```
let esMayorDeEdad = true
```

### __null__
```
let noHayValor = null
```

### __undefined__
No es un tipo de dato, es un valor que representa la ausencia de valor o la ausencia de un objeto, lo asigna automáticamente Javascript cuando se declara una variable sin valor.

```
let noDefinido = undefined
```

### __symbol__
Indica un valor único, nuevo en ES6

```
let simboloUnico = Symbol("valor_unico")
```

### __bigint__
Almacena números de precisión arbitrariamente grande (nuevo en ES2020)

```
let numeroGrande = 1234567890123456789012345678901234567890n
```

## Complejos

### __object__
```
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
}
```

### __array__
```
let frutas = ["manzana", "banana", "naranja"]
```

### __function__
```
function saludar(nombre) {
    return `Hola, ${nombre}!`
}
```
