function media() {
    //criar referêcia aos elemtentos da página
    var inNome = document.getElementById("inNome")
    var n1 = document.getElementById("inNota")
    var n2 = document.getElementById("inNota2")
    var outMedia = document.getElementById("outMedia")
    var outSituacao = document.getElementById("outSituacao")

    //obter conteúdo dos campos da página
    var nome = inNome.value
    var n1 = Number(inNota.value)
    var n2 = Number(inNota2.value)

    //calcular a média
    var media = (n1 + n2) / 2

    //mostrar a média
    outMedia.textContent = "Média da nota: " + media.toFixed(1)

    //condição do resultado
    if (media >= 7) {
        // altera o elemento e estilo(cor)
        outSituacao.textContent = "Parabéns " + nome + "! Você foi aprovado!"
        outSituacao.style.color = "blue"
    } else if (media >= 4) {
        outSituacao.textContent = nome + ", Você está de Sub!"
        outSituacao.style.color = "green"
    } else {
        outSituacao.textContent = nome + ", Você está Reprovado!"
        outSituacao.style.color = "red"
    }
}

//criar uma referência para o botão
var btResul = document.getElementById("btResul")
//registrar um evento
btResul.addEventListener("click", media)