const { createApp } = Vue;

createApp({
    data() {
        return {
            pokemon: { 
                life: 351, 
                maxLife: 351, 
                name: 'Rayquaza', 
                attack: 336, 
                defense: 216, 
                speed: 226, },

            oponent: { life: 441, 
                maxLife: 441, 
                name: 'Giratina', 
                attack: 276, 
                defense: 236, 
                speed: 216,},

                
            fighting: false,
            bagStatus: false,
            battling: false,
            potion: true,
        }
    },
    methods: {
        // Botões de ações ----------------------------------------------------------------
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
            this.pokemon.life = 351
        },



        // Pokemon Ataques -------------------------------------------------------------
        attackThunder() {
            this.oponent.life -= Math.floor(((this.pokemon.attack / this.oponent.defense) * 50))
            if (this.oponent.life <= 0) {
                this.oponent.life = 0
            }
        },

        attackTwister() {
            this.oponent.life -= Math.floor(((this.pokemon.attack / this.oponent.defense) * 90))
            if (this.oponent.life <= 0) {
                this.oponent.life = 0
            }
        },

        attackCrunch() {
            this.oponent.life -= Math.floor(((this.pokemon.attack / this.oponent.defense) * 110))
            if (this.oponent.life <= 0) {
                this.oponent.life = 0
            }
        },

        attackBulkUp() {
            this.pokemon.attack *= 1.15
        },

        // Oponent ataques --------------------------------------------------------------
        attackRest() {

        },

        attacksleepTalk() {

        },

        attackShadowBall() {

        },

        attackDragonClaw() {

        },
    }
}).mount('#app')