/* 
    Fatorial de um número natural é igual a ele
    prórpio multiplicado por todos os seus antecessores
*/

function fatorial(n){
    let res = 1
    for(let i = n; i > 1; i--) res *= i
    return res
}

console.log('Fatorial de 8:', fatorial(8))