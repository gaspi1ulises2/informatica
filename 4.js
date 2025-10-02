let contador = 11;
let boton = document.getElementById("btnsubir");
let numero = document.getElementById("conteo");

boton.addEventListener("click", function(){
    contador--;
    numero.textcontet = contador;
})