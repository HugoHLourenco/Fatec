import Stack from './lib/Stack.mjs';

let pilha = new Stack();

console.log(pilha.print())
console.log('Está vazia?', pilha.isEmpty)

pilha.push(10)
pilha.push(15)
pilha.push(9)
pilha.push(8)
pilha.push(20)
pilha.pop()
pilha.pop()

console.log(pilha.peek())

console.log(pilha.print())
console.log('Está vazia?', pilha.isEmpty)
