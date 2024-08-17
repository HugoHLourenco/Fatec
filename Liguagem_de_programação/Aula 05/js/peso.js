function imc() {
    var inNome = document.getElementById("inNome")
    var sexoRadioM = document.getElementById("inSexoM")
    var sexoRadioF = document.getElementById("inSexoF")
    var inAltura = document.getElementById("inAltura")
    var outImc = document.getElementById("outImc")

    var nome = inNome.value
    var sexoM = sexoRadioM.checked;
    var altura = Number(inAltura.value)
    var imcFinal = 0


    if (sexoM == true) {
        imcFinal = 22 * (altura ^ 2)
    }else {
        imcFinal = 21 * (altura ^ 2)
    }

    outImc.textContent = nome + ", seu peso ideal é: " + imcFinal.toFixed(2) + " "

    if(altura == ""){
        outImc.textContent = "Digite um valor!!!"
    }

}

function clear(){
    document.getElementById("inNome").value = ""
    document.getElementById("inSexoM").checked = false
    document.getElementById("outImc").textContent = ""
    document.getElementById("inAltura").value = ""
    document.getElementById("inSexof").checked = false
}

var btCalcular = document.getElementById("btCalc")
var btClear = document.getElementById("btClear")

btCalcular.addEventListener("click", imc)
btClear.addEventListener("click", clear)