function pedirNombre() {
    let nombre = prompt("¿Como te llamas?");
    alert("Hola " + nombre + ", ¡bivenido a la clase de JavaScript!")
}
if (nombre) {
    alert(" hola" + nombre + ", ¡bienvenido a la clase de JavaScript!")
} else {
    alert("No escribiste tu nombre, intentalo de nuevo.");
}