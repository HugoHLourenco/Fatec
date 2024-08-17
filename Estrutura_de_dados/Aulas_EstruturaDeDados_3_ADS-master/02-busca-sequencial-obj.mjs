function buscaSequencial(vetor, fnComp){
    for(let i = 0; i < vetor.length; i++){    
        if(fnComp(vetor[i])) return i
    }
    return -1
}

import { objNomes } from './data/vetor-obj-nomes.mjs'

function comparaNome(obj){
    return obj.first_name === 'ALEXANDRE'
}

function comparaFrequencia(obj){
    return obj.frequency_group === 1144
}

console.log('Posição de ALEXANDRE: ', buscaSequencial(objNomes,comparaNome))

console.time()
console.log('Posição da Frequência 1144: ', buscaSequencial(objNomes,comparaFrequencia))
console.timeEnd()

console.log('Posição de GERCINA: ', buscaSequencial(objNomes, obj => obj.first_name === 'GERCINA'))