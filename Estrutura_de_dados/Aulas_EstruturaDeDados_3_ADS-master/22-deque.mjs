import Deque from "./lib/deque.mjs"

//Lista de compras

let listaCompras = new Deque()



console.log(listaCompras.print())
console.log("Está vazia? " + listaCompras.isEmpty)

//alimentício
listaCompras.insertFront('Arroz')
listaCompras.insertFront('Feijão')
listaCompras.insertFront('Macarrão')
console.log(listaCompras.print())

//Higiene e Limpeza => final
listaCompras.insertBack('Água Sanitaria')
listaCompras.insertBack("Desodorante")
listaCompras.insertBack('Papel Higienico')
console.log(listaCompras.print())

listaCompras.insertFront('Café')
listaCompras.insertFront('Açúcar')
console.log(listaCompras.print())

listaCompras.insertBack('Shampoo')
console.log(listaCompras.print())

let removido = listaCompras.removeBack()
console.log({removido})
console.log(listaCompras.print())

let primeiro = listaCompras.peekFront()
console.log({primeiro})
console.log(listaCompras.print())

let ultimo = listaCompras.peekBack()
console.log({ultimo})
console.log(listaCompras.print())