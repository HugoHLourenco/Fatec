//VARIÁVEIS
var notaCorte = Number(prompt("Número de acertos para aprovação"))
var btAdicionar = document.getElementById("btAdicionar")
var btListar = document.getElementById("btListar")
var btAprovados = document.getElementById("btAprovados")
var btLimpar = document.getElementById("btLimpar")
var out = document.getElementById("out")
var outNotaCorte = document.getElementById("outNotaCorte")

var inCandidato = document.getElementById("inCandidato")
var inAcertos = document.getElementById("inAcertos")
var candidatos = []

//VERIFICADOR DO PROMPT
if (isNaN(notaCorte) || notaCorte == "") {
    alert("DIGITE UM VALOR VÁLIDO!!!")

} else {
    //ADICIONA A NOTA DE CORTE NA TELA (UM COMPLEMENTO QUE EU FIZ)
    outNotaCorte.innerHTML = notaCorte

    // BOTÃO ADICIONAR
    function adicionar() {
        if (inCandidato.value == "" || inAcertos.value == "") {
            alert("DIGITE VALORES NOS CAMPOS!!!")
            return inCandidato.focus()
        } else {
            var novoCandidato = { nome: inCandidato.value, acertos: Number(inAcertos.value) }
            candidatos.push(novoCandidato)

            out.innerHTML = ""

            candidatos.sort((a, b) => b.acertos - a.acertos)

            for (let i = 0; i < candidatos.length; i++) {
                out.innerHTML += `${candidatos[i].nome} - ${candidatos[i].acertos} acertos <br>`
            }

            inCandidato.value = ""
            inAcertos.value = ""

            return inCandidato.focus()
        }
    }

    //BOTÃO LISTAR TODOS
    function listar() {
        if (candidatos.length === 0) {
            alert("DIGITE AO MENOS UM CANDIDATO!!!")
            return inCandidato.focus()
        } else {
            out.innerHTML = ""
            for (let i = 0; i < candidatos.length; i++) {
                out.innerHTML += `${candidatos[i].nome} - ${candidatos[i].acertos} acertos <br>`
            }
            return inCandidato.focus()
        }
    }

    //BOTÃO APROVADOS 2° ETAPA
    function aprovados() {
        out.innerHTML = ""

        let candidatosAprovados = candidatos.filter(candidato => candidato.acertos >= notaCorte)

        if (candidatosAprovados.length > 0) {
            for (let i = 0; i < candidatosAprovados.length; i++) {
                out.innerHTML += `${candidatosAprovados[i].nome} - ${candidatosAprovados[i].acertos} acertos <br>`
            }
        } else if (candidatos.length == 0) {
            alert("Não há candidatos na lista!!!")
            return inCandidato.focus()
        } else {
            alert("Não há candidatos aprovados!!!")
            return inCandidato.focus()
        }
    }

    //BOTÃO PARA LIMPAR A LISTA (OUTRO COMPLEMENTO)
    function limpar() {
        out.innerHTML = ""
        candidatos = []
        alert("Lista limpa com sucesso!!!")
        return inCandidato.focus()
    }
}

// FUNÇÕES PARA MUDAR AS CORES DOS BOTÕES (FRESCURA)

btAdicionar.addEventListener("mouseenter", entrarAd)
btAdicionar.addEventListener("mouseleave", saiuAd)
function entrarAd() {
    btAdicionar.style.background = "darkslategrey"
}
function saiuAd() {
    btAdicionar.style.background = "darkcyan"
}

btListar.addEventListener("mouseenter", entrarLis)
btListar.addEventListener("mouseleave", saiuLis)
function entrarLis() {
    btListar.style.background = "darkslategrey"
}
function saiuLis() {
    btListar.style.background = "darkcyan"
}

btAprovados.addEventListener("mouseenter", entrarAp)
btAprovados.addEventListener("mouseleave", saiuAp)
function entrarAp() {
    btAprovados.style.background = "darkslategrey"
}
function saiuAp() {
    btAprovados.style.background = "darkcyan"
}

btLimpar.addEventListener("mouseenter", entrarLim)
btLimpar.addEventListener("mouseleave", saiuLim)
function entrarLim() {
    btLimpar.style.background = "darkslategrey"
}
function saiuLim() {
    btLimpar.style.background = "darkcyan"
}