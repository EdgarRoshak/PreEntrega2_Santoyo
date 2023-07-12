// Esto es un comentario

src="https://code.jquery.com/jquery-3.6.0.min.js"
src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"


console.log("Bienvenidos a la comision")




//------------------ ALGORITMO UTILIZANDO UNA CONDICIÓN -------------------------------------

// Solicitar la cantidad de vapes al usuario
var cantidadVapes = prompt("¿Cuántos vapes deseas comprar?");

// Convertir la entrada a un número entero
cantidadVapes = parseInt(cantidadVapes);

// Determinar el precio según la cantidad de vapes
var precioPorPieza;

if (cantidadVapes >= 1000) {
  precioPorPieza = 125.00;
} else if (cantidadVapes >= 500) {
  precioPorPieza = 130.00;
} else if (cantidadVapes >= 100) {
  precioPorPieza = 135.00;
} else if (cantidadVapes >= 50) {
  precioPorPieza = 145.00;
} else if (cantidadVapes >= 20) {
  precioPorPieza = 150.00;
} else if (cantidadVapes >= 10) {
  precioPorPieza = 205.00;
} else {
  // Si la cantidad de vapes es menor a 10, no se aplica ningún descuento
  precioPorPieza = 250;
}

// Calcular el precio total
var precioTotal = cantidadVapes * precioPorPieza;

// Mostrar el precio total en la consola
console.log("Cantidad de vapes: " + cantidadVapes);
console.log("Precio por pieza: $" + precioPorPieza.toFixed(2));
console.log("Precio total: $" + precioTotal.toFixed(2));




//-------------------------ALGORITMO UTILIZANDO UN CICLO-------------------------------------------



// Definición de la cadena de caracteres válidos para los códigos promocionales
const caracteresValidos = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// Definición de la longitud deseada para los códigos promocionales
const longitudCodigo = 5;

// Obtención de la cantidad de códigos promocionales a generar mediante un prompt
const cantidadCodigos = parseInt(prompt("Ingrese la cantidad de códigos promocionales a generar:"));

// Verificación si la cantidad ingresada es un número válido
if (isNaN(cantidadCodigos)) {
  console.log("La cantidad ingresada no es válida.");
} else {
  // Ciclo para generar la cantidad especificada de códigos promocionales
  for (let i = 0; i < cantidadCodigos; i++) {
    // Variable para almacenar el código promocional generado en cada iteración
    let codigoPromocional = "";
    
    // Ciclo para generar cada carácter del código promocional
    for (let j = 0; j < longitudCodigo; j++) {
      // Generación aleatoria de un índice para obtener un carácter válido
      codigoPromocional += caracteresValidos.charAt(
        Math.floor(Math.random() * caracteresValidos.length)
      );
    }
    
    // Impresión del código promocional generado
    console.log(codigoPromocional);
  }
}

