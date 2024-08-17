function convertDuracao() {
    //criar referencia aos elementos da pagina
    var inTitulo = document.getElementById("inTitulo")
    var inDuracao = document.getElementById("inDuracao")
    var outTitulo = document.getElementById("outTitulo")
    var outDuracao = document.getElementById("outDuracao")

    //obter conteudo soa campos de entrada
    var titulo = inTitulo.value
    var duracao = Number(inDuracao.value)

    //arredonda para baixo
    var horas = Math.floor(duracao / 60)
    //obter os minutos
    var inMinuto = duracao % 60

    //altera os paragrafos de respostas
    outTitulo.textContent = "Nome do filme: " + titulo;
    outDuracao.textContent = "Duração do filme:" + horas + "h e " + inMinuto + "'"
}

//criar referencia ao elemento btConverter
var btConverter = document.getElementById("btConverter")
//registrar o evento associado ao botao e chamar a funçao
btConverter.addEventListener("click", convertDuracao)
