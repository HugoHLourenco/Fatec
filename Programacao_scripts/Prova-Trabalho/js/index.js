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

            calms: 3,
            fighting: false,
            bagStatus: false,
            battling: false,
            potion: true,
            battle: 0,
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
            this.battle += 1
            this.pokemon.move = "potion"
        },

        next() {
            if (this.oponent.life === 0) {
                this.battle = 6
            } else {
                this.battle += 1
                this.ia()
                if (this.battle === 4) {
                    this.battle = 0
                }
            }
        },

        next2() {
            if (this.pokemon.life === 0) {
                this.battle = 7
            } else {
                this.battle = 0
            }
        },

        btnRestart() {
            window.location.reload();
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
            var prob =  Math.floor(Math.random() * 5)
            if (prob === 5) {
                this.oponent.defense /= 1.2 
            }
            this.battle += 1
            this.pokemon.move = "Crunch"
        },

        attackBulkUp() {
            this.pokemon.attack *= 1.2
            this.pokemon.defense *= 1.2
            this.battle += 1
            this.pokemon.move = "Bulk Up"
        },

        // Oponent ataques --------------------------------------------------------------

        ia() {
            if (this.oponent.life <= (this.oponent.maxLife * 0.3)) {
                this.attackRecover()
            } else {
                var num = Math.floor(Math.random() * this.calms)
                switch (num) {
                    case 0:
                        this.attackDragonClaw()
                        break
                    case 1:
                        this.attackShadowBall()
                        break
                    case 2:
                        this.attackCalmMind()
                        break
                }
            }
        },

        attackRecover() {
            this.oponent.life += Math.floor(this.oponent.maxLife / 2)
            this.battle += 1
            this.oponent.move = "Recover"
        },

        attackCalmMind() {
            this.oponent.attack *= 1.25
            this.oponent.defense *= 1.25
            this.battle += 1
            this.calms = 2
            this.oponent.move = "Calm mind"
        },

        attackShadowBall() {
            this.pokemon.life -= Math.floor(((this.oponent.attack / this.pokemon.defense) * 80))
            if (this.pokemon.life <= 0) {
                this.pokemon.life = 0
            }
            this.battle += 1
            this.oponent.move = "Shadow Ball"
        },

        attackDragonClaw() {
            this.pokemon.life -= Math.floor(((this.oponent.attack / this.pokemon.defense) * 110))
            if (this.pokemon.life <= 0) {
                this.pokemon.life = 0
            }
            this.battle += 1
            this.oponent.move = "Dragon Claw"
        },

    }
}).mount('#app')