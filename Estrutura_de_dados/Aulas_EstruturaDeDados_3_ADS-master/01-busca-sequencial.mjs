function buscaSequencial(vetor, valorBusca){
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] === valorBusca) return i
    }
    return -1
}

import { nomes } from './data/vetor-nomes.mjs'

console.time("Buscando ALEXANDRE...")
console.log("Posição de ALEXANDRE: ", buscaSequencial(nomes, "ALEXANDRE"))
console.timeEnd("Buscando ALEXANDRE...")

// const frutas = ['laranja', 'maçã', 'uva', 'pera', 'jabuticaba', 'limão']

// console.log("Posisção de uva: ", buscaSequencial(frutas, "uva"))
// console.log("Posisção de laranja: ", buscaSequencial(frutas, "laranja"))
// console.log("Posisção de mamão: ", buscaSequencial(frutas, "mamão"))
// console.log("Posisção de abacate: ", buscaSequencial(frutas, "abacate"))