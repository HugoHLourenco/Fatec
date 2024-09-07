const { createApp } = Vue;

createApp({
    data() {
        return {
            pokemon: { life: 100, maxLife: 300, name: 'Rayquaza',},
            oponent: { life: 124, maxLife: 331, name: 'Giratina', },
            fighting: false,
            bagStatus: false,
            battling: false,
            potion: true,
        }
    },
    methods: {
        fight(fighting){
            this.fighting = !this.fighting
        },

        bag(bagStatus) {
            this.bagStatus = !this.bagStatus
        },

        run(){
            alert("Você fugiu...")
        },

        numTemMais(){
            alert("Você não tem outros pokémons!")
        },

        usePotion(){
            this.bagStatus = false
            this.potion = false
        },
    }
}).mount('#app')