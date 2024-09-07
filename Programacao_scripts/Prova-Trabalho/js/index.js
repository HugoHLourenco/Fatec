const { createApp } = Vue;

createApp({
    data() {
        return {
            pokemon: { life: 351, maxLife: 351, name: 'Rayquaza', attack: 336, defense: 216, speed: 226, },
            oponent: { life: 441, maxLife: 441, name: 'Giratina', attack: 276, defense: 236, speed: 216,},
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
            window.location.reload();
        },

        numTemMais(){
            alert("Você não tem outros pokémons!")
        },

        usePotion(){
            this.bagStatus = false
            this.potion = false
        },

        attackThunder() {
            this.oponent.life -= 111
        },
    }
}).mount('#app')