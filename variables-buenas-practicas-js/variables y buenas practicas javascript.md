```
// Lo No permitido

let c = 'Woody' // sin significado claro
let cda = 'Woody' // Abreviación poco clara
let pcAndy = 'Woody' // Abreviación ambigua

// Lo permitido
let primerTrasteoDeAndy = 'Woody' // Nombre descriptivo
let urlDelUsuario = 'https://platzi.com' // Abreviación conocida
let idDelUsuario = 1 // identificador universal
```

- Se recomienda que las variables siempre vayan al inicio del código

### Variables `let`

Son variabels que su valor cambia a lo largo del tiempo, por ejemplo un contador.

```
let contador
contador = contador + 1;
```

### Variables `const`

son variables donde su valor no cambia a lo largo del tiempo, por ejemplo la constante de la velocidad de la luz.

```
let velocidadDeLaLuz = 299792458; // m/s