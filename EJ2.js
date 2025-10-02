function calcular() {
// Pedimos los dos numeros
let numero1 = prompt("ingresa el primer numero:");
let numero2 = prompt("ingresa el segundo numero:");
//Convertimos los valores de texto a numero
numero1 = Number(numero1);
numero2 = Number(numero2);
//Validamos que ambos sean numeros
if (!isNaN(numero1) && !isNaN(numero2)) {
let suma = numero1 + numero2;
alert("La suma de " + numero1 + " + " + numero2 + " es: ")
} else {
alert("debes ingresar solo valores numericos.");
}
}