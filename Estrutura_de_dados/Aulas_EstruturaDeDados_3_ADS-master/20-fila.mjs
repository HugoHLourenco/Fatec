import Queue from './lib/Queue.mjs';

let fila = new Queue()
console.log(fila.print())
console.log(fila.isEmpty)

fila.enqueue('Alexandre')
fila.enqueue('José')
fila.enqueue('João')
fila.enqueue('Fulano')
fila.enqueue('Beltrano')

console.log(fila.print())

let atendido = fila.dequeue()
console.log({atendido})
console.log(fila.print())

fila.enqueue('Siclano')

console.log(fila.print())
let proximo = fila.peek()
console.log({proximo})