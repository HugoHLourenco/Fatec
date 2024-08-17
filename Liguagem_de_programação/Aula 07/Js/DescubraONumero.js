var erros = []
var sorteado = Math.floor(Math.random() * 100) + 1
const chances = 6

function apostar() {
    var inNumero = document.getElementById("inNumero").value

    if (inNumero <= 0 || inNumero > 100 || isNaN(inNumero)) {
        alert("INFORME UM NÚMERO VÁLIDO!!!")
        inNumero.focus()
        return
    }

    var outDica = document.getElementById("outDica")
    var outErros = document.getElementById("outErros")
    var outChances = document.getElementById("outChances")

    if (inNumero == sorteado) {
        alert("Parabéns, você acertou o número!!!")
        btApostar.disabled = true
        btJogar.className = "exibe"
        outDica.textContent = "Parabéns! Você descobriu o número!: " + sorteado
    } else {
        if (erros.indexOf(inNumero) >= 0) {
            alert(`NÚMERO JÁ DIGITADO!!! ${inNumero}`)
        } else {
            erros.push(inNumero)
            var numErros = erros.length
            var numChances = chances - numErros
            outErros.textContent = numErros + " (" + erros.join(", ") + ")"
            outChances.textContent = numChances
        }
        document.getElementById("inNumero").value = ""
        document.getElementById("inNumero").focus()
    }
}
var btApostar = document.getElementById("btApostar")
btApostar.addEventListener("click", apostar)


