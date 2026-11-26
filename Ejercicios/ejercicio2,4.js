let contador = 10;

console.log("Valor inicial:", contador);

// Incremento postfijo
console.log("Postincremento:", contador++);
console.log("Valor después del postincremento:", contador);

// Incremento prefijo
console.log("Preincremento:", ++contador);
console.log("Valor después del preincremento:", contador);

// Decremento postfijo
console.log("Postdecremento:", contador--);
console.log("Valor después del postdecremento:", contador);

// Decremento prefijo
console.log("Predecremento:", --contador);
console.log("Valor final:", contador);

// Explicación:
// El postfijo primero utiliza el valor y después lo modifica.
// El prefijo primero modifica el valor y después lo utiliza.