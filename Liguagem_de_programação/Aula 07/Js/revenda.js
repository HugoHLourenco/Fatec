var carros = []

function adicionar() {
    var inModelo = document.getElementById("inModelo")
    var inPreco = document.getElementById("inPreco")

    var modelo = inModelo.value
    var preco = Number(inPreco.value)

    //  VALIDAR CAMPOS
    if (modelo == "" || preco == 0) {
        alert("INFORME CORRETAMENTE OS DADOS!!!")
        document.getElementById("inModelo").focus()
    } else {
        //  ADICIONAR DADOS AO VETOR
        carros.push({ modelo: modelo, preco: preco })
    
        //  LIMPA CAMPOS
        document.getElementById("inModelo").value = ""
        document.getElementById("inPreco").value = ""
    
        listar()    //  CHAMAR A FUNÇÃO QUE LISTA OS CARROS
    }

}

function listar() {
    if (carros.length == 0) {
        alert("NÃO HÁ CARROS NA LISTA!!!")
    }

    var lista = ""

    //  PERCORRE O VETOR    
    for (let i = 0; i < carros.length; i++) {
        lista += carros[i].modelo + " - R$ " + carros[i].preco
    }

    //  PRINTAR NA TELA
    document.getElementById("outLista").textContent = lista
}