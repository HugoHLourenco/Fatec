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
                speed: 226,
                move: "",
            },

            oponent: {
                life: 441,
                maxLife: 441,
                name: 'Giratina',
                attack: 276,
                defense: 236,
                speed: 216,
                move: "",
            },


            fighting: false,
            bagStatus: false,
            battling: false,
            potion: true,
            battle: 0,
            mensage: "",
        }
    },
    methods: {
        // Botões de ações ----------------------------------------------------------------
        fight(fighting) {
            this.fighting = !this.fighting
        },

        bag(bagStatus) {
            this.bagStatus = !this.bagStatus
        },

        run() {
            alert("Você fugiu...")
            window.location.reload();
        },

        numTemMais() {
            alert("Você não tem outros pokémons!")
        },

        usePotion() {
            this.bagStatus = false
            this.potion = false
            this.pokemon.life = 351
        },

        next() {
            this.battle += 1
            this.attackShadowBall()
            if (this.battle >= 3) {
                this.battle = 0
            }
        },


        // Pokemon Ataques -------------------------------------------------------------
        attackThunder() {
            this.oponent.life -= Math.floor(((this.pokemon.attack / this.oponent.defense) * 50))
            if (this.oponent.life <= 0) {
                this.oponent.life = 0
            }
            this.battle += 1
            this.pokemon.move = "Thunder"
        },

        attackTwister() {
            this.oponent.life -= Math.floor(((this.pokemon.attack / this.oponent.defense) * 90))
            if (this.oponent.life <= 0) {
                this.oponent.life = 0
            }
            this.battle += 1
            this.pokemon.move = "Twister"
        },

        attackCrunch() {
            this.oponent.life -= Math.floor(((this.pokemon.attack / this.oponent.defense) * 110))
            if (this.oponent.life <= 0) {
                this.oponent.life = 0
            }
            this.battle += 1
            this.pokemon.move = "Crunch"
        },

        attackBulkUp() {
            this.pokemon.attack *= 1.15
            this.battle += 1
            this.pokemon.move = "Bulk Up"
        },

        // Oponent ataques --------------------------------------------------------------

        ia(battle) {
            if (this.battle === 3) {
                if (this.oponent.life <= this.oponent.maxLife * 0.9) {
                    this.attackRest()
                }
            }
        },

        attackRest() {
            this.oponent.life = 441
            this.oponent.move = "Rest"
        },

        attacksleepTalk() {

        },

        attackShadowBall() {
            this.pokemon.life -= Math.floor(((this.oponent.attack / this.pokemon.defense) * 110))
            if (this.pokemon.life <= 0) {
                this.pokemon.life = 0
            }
            this.battle += 1
            this.oponent.move = "Shadow Ball"
        },

        attackDragonClaw() {

        },

    }
}).mount('#app')