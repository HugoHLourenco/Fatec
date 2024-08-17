function fusoHorario() {
        var hora = document.getElementById("inHora").value;
        var outHora = document.getElementById("outHora");

        hora = parseFloat(hora);

        if (isNaN(hora)) {
            outHora.textContent = "DIGITE UM VALOR!!!";
        } else if (hora >= 20) {
            hora = (hora + 5) - 24
            outHora.textContent = "Na França agora é: " + hora.toFixed(2) + " h"
        } else {
            hora = hora + 5
            outHora.textContent = "Na França agora é: " + hora.toFixed(2) + " h"
        }
    }


var bt = document.getElementById("bt")
bt.addEventListener("click", fusoHorario)


