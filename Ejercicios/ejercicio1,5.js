// Variable declarada fuera del bloque
let x = 10;

{
    // Variable declarada dentro del bloque
    let y = 20;

    console.log("Valor de x:", x);
    console.log("Valor de y:", y);
}

// Podemos imprimir x porque está fuera del bloque
console.log("Desde fuera, x vale:", x);

// No podemos imprimir y porque fue declarada dentro del bloque.
// console.log(y); 

// Explicación:
// La variable x tiene alcance global en este ejemplo.
// La variable y tiene alcance de bloque y solamente
// puede utilizarse dentro de las llaves {}.