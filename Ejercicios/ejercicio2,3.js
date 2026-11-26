let esMayorDeEdad = true;
let tieneDocumento = true;
let esColombia = false;

console.log(
    "Es mayor de edad y tiene documento:",
    esMayorDeEdad && tieneDocumento
);

console.log(
    "Es mayor de edad o es Colombia:",
    esMayorDeEdad || esColombia
);

console.log(
    "No tiene documento:",
    !tieneDocumento
);