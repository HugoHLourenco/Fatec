let pass, comps, trocas
function selectionSort(vetor){
    pass = 0, comps = 0, trocas = 0
    for(let posSel = 0; posSel < vetor.length - 1; posSel++){
        pass++  
        let posMenor = posSel + 1
        for(let i = posMenor + 1; i < vetor.length; i++){
            if(vetor[posMenor] > vetor[i]){
                posMenor = i
                comps++
            }
        }
        if(vetor[posSel] > vetor[posMenor]){
            [ vetor[posSel], vetor[posMenor] ] = [ vetor[posMenor], vetor[posSel] ]
            trocas++
        }
    }
}
// let nums = [ 77, 44, 22, 33, 99, 55, 88, 0, 66, 11 ]

//melhor caso
// let nums = [ 0, 11, 22, 33, 44, 55, 66, 77, 88, 99 ] 

//pior caso
// let nums = [ 99, 88, 77, 66, 55, 44, 33, 22, 11, 0 ] 

import { nomes } from './data/nomes-desord.mjs'
console.time('...')
selectionSort(nomes)
let memoriaMB = process.memoryUsage().heapUsed / 1024 / 1024
console.timeEnd("...")

console.log(nomes)
console.log({pass, comps, trocas, memoriaMB})