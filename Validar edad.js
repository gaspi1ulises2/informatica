
function calcular() {
        let numero1 = prompt(" ingresa el primer numero:");
    let numero2 = prompt("ingresa el segundo numero:");
    numero1 = Number(numero1);
    numero2 = Number(numero2);
    if (!isNaN(numero1) && !isNaN(numero2)) {
let suma = numero1 + numero2;
if (suma < 18) {
    alert("Error: No tienes la suficiente edad!");
} else if (suma > 18 ) {
    alert("aceptado: bienvenido a la pagina.");
} else {
    alert(" aceptado: bienvenido a la pagina.");
}
} else {
    alert("debes ingresar solo valores numericos.");
}
}