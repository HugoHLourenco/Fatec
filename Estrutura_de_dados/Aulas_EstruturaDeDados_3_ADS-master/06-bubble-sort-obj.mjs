let pass, comps, trocas
function bubbleSort(vetor, fnComp){
    pass = 0, comps = 0, trocas = 0
    let swap
    do{
        pass++
        swap = false
        for(let i = 0; i < vetor.length - 1; i++){
            comps++
            if( fnComp(vetor[i] , vetor[i+1]) ){
                [ vetor[i], vetor[i+1] ] = [ vetor[i+1], vetor[i] ]
                swap = true
                trocas++
            }  
        }
    } while(swap)
}

import { objMotoristas } from './data/motoristas-obj-desord.mjs'

console.time("...")
bubbleSort(
    objMotoristas, (obj1, obj2) => obj1.nome_motorista > obj2.nome_motorista
)
console.timeEnd("...")
console.log(objMotoristas)
console.log({pass, comps, trocas})