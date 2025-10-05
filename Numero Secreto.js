const boton = document.getElementById("jugarbtn");
boton.addEventListener("click", function() {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let intento = prompt("adivina el numero secreto( entre 1 y 10):");
    
    if (intento== numeroSecreto) {
        alert(" 🎉 ¡correcto! adivinaste el numero secreto.");
        
    } else {
        alert("❌ incorrecto. el numero secreto era " + numeroSecreto );
    }
})
