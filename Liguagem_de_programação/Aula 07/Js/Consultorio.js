var nomes = []

function adicionar() {
    var inPaciente = document.getElementById("inNome").value
    var outLista = document.getElementById("outLista")

    if (inPaciente == "") {
        alert("INFORME UM NOME!!!")
        inNome.focus()
        return
    }

    nomes.push(inPaciente)

    var lista = ""

    for (var i = 0; i < nomes.length; i++) {
        lista += (i + 1) + ". " + nomes[i] + "\n"
    }

    outLista.textContent = lista

    inNome.value = ""
    inNome.focus()

    console.log(nomes)
}

var btAdicionar = document.getElementById("btFila")
btAdicionar.addEventListener("click", adicionar)

function urgente() {
    var inPaciente = document.getElementById("inNome").value
    var outLista = document.getElementById("outLista")

    if (inPaciente == "") {
        alert("INFORME UM NOME!!!")
        inNome.focus()
        return
    }

    nomes.unshift(inPaciente)

    var lista = ""

    for (var i = 0; i < nomes.length; i++) {
        lista += (i + 1) + ". " + nomes[i] + "\n"
    }

    outLista.textContent = lista

    inNome.value = ""
    inNome.focus()

    console.log(nomes)
}

var btUrgente = document.getElementById("btUrgente")
btUrgente.addEventListener("click", urgente)

function atender() {

    if (nomes == 0) {
        alert("NÃO HÁ PACIENTES NA FILA!!!")
        inNome.focus()
        return
    }

    var outAtendimento = document.getElementById("outAtendimento")
    var outLista = document.getElementById("outLista")
    var atender = nomes.shift()

    outAtendimento.textContent = atender

    var lista = ""

    for (i = 0; i < nomes.length; i++) {
        lista += [i + 1] + ". " + nomes[i] + "\n"
    }

    outLista.textContent = lista
}

var btAtender = document.getElementById("btAtender")
btAtender.addEventListener("click", atender)