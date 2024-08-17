class Node {
    constructor(val) {
        this.data = val
        this.next = null
    }
}

export default class LinkedList {
    #head
    #tail
    #count

    constructor() {
        this.#head = null
        this.#tail = null
        this.#count = 0
    }

    get isEmpty() {
        return this.#count === 0
    }

    get count() {
        return this.#count
    }

    insert(pos, val) {
        const inserted = new Node(val)

        //1° Caso: A lista está vazia
        if (this.isEmpty) {
            this.#head = inserted
            this.#tail = inserted
        }

        //2° Caso: Lista não vazia, insserção na primeira posisão
        else if (pos === 0) {
            inserted.next = this.#head
            this.#head = inserted
        }

        //3° Caso: Inserção no final da lista
        else if (pos >= this.#count) {
            this.#tail.next = inserted
            this.#tail = inserted
        }

        //4° Caso: Posição intermediaria
        else {
            let before = this.#head

            for (let i = 1; i < pos; i++) {
                before = before.next
            }

            let after = before.next

            inserted.next = after
            before.next = inserted
        }
        this.#count++
    }

    insertedHead(val) {
        this.insert(0, val)
    }

    insertTail(val) {
        this.insert(this.#count, val)
    }

    remove(pos) {
        //1° Caso: A lista está vazia ou posição informada fora dos
        if (this.isEmpty || pos < 0 || pos > this.#count - 1){
            return undefined
        }

        let removed

        //2° Caso: Remoção do início da lista
        if(pos === 0){
            removed = this.#head
            this.#head = this.#head.next
            if(this.#count === 1){
                this.#tail = null
            }

        //3° Caso: 
        }
    }
}