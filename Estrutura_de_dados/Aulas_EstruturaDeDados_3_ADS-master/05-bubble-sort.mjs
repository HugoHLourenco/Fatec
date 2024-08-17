let pass, comps, trocas
function bubbleSort(vetor){
    pass = 0, comps = 0, trocas = 0
    let swap
    do{
        pass++
        swap = false
        for(let i = 0; i < vetor.length - 1; i++){
            comps++
            if( vetor[i] > vetor[i+1] ){
                [ vetor[i], vetor[i+1] ] = [ vetor[i+1], vetor[i] ]
                swap = true
                trocas++
            }  
        }
    } while(swap)
}
let nums = [ 77, 44, 22, 33, 99, 55, 88, 0, 66, 11 ]

//melhor caso
// let nums = [ 0, 11, 22, 33, 44, 55, 66, 77, 88, 99 ] 

//pior caso
// let nums = [ 99, 88, 77, 66, 55, 44, 33, 22, 11, 0 ] 

bubbleSort(nums)
console.log(nums)
console.log({pass, comps, trocas})