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
                percent: 99,
            },

            oponent: {
                life: 441,
                maxLife: 441,
                name: 'Giratina',
                attack: 276,
                defense: 236,
                speed: 216,
                move: "",
                percent: 98,
            },

            // Variáveis -------------------------------------------------------------
            calms: 3, //Contador do Calm Mind
            fighting: false, // Verficador se "fight" está ativo
            bagStatus: false, // Verficador se "bag" está ativa
            battling: false, // Verficador se estão batalhando
            potion: true, // Contador da potion
            battle: 0, // Contador de turno de batalha
            runn: false, // Verificador de fuga
            moveStats: {// Contador de PP e tipo do golpe
                pb: null,
                pp: null,
                type: "",
                name: ""
            },

            // Golpes -----------------------------------------------------------
            thunder: {
                name: "thunder",
                pb: 60,
                pp: 10,
                type: "Eletric"
            },

            bulkUp: {
                pp: 20,
                type: "Fighting"
            },

            crunch: {
                name: "crunch",
                pb: 110,
                pp: 15,
                type: "Dark"
            },

            twister: {
                name: "twister",
                pb: 100,
                pp: 20,
                type: "Dragon"
            },
        }
    },
    methods: {
        // Botões de ações --------------------------------------------------------       
        fight(fighting) {
            this.fighting = !this.fighting
        },

        bag(bagStatus) {
            this.bagStatus = !this.bagStatus
        },

        run() {
            this.runn = true
            this.battle = 8
        },

        numTemMais() {
            alert("Você não tem outros pokémons!")
        },

        usePotion() {
            this.bagStatus = false
            this.potion = false
            this.pokemon.life = 351
            this.pokemon.percent = 99
            this.battle += 1
            this.pokemon.move = "potion"
        },

        next() {
            if (this.oponent.life === 0) {
                this.oponent.percent = 0
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
                this.pokemon.percent = 0
                this.battle = 7
            } else {
                this.battle = 0
            }
        },

        btnRestart() {
            window.location.reload();
        },

        showPP(name) {
            switch (name) {
                case 'thunder':
                    this.moveStats = this.thunder
                    break
                case 'twister':
                    this.moveStats = this.twister
                    break
                case 'bulkUp':
                    this.moveStats = this.bulkUp
                    break
                case 'crunch':
                    this.moveStats = this.crunch
                    break
            }
        },

        clearDiv() {
            this.moveStats = ""
        },

        // Pokemon Ataques -------------------------------------------------------------
        attack(name) {
            this.moveStats.name = name.name
            this.moveStats.pb = name.pb
            this.moveStats.pp = name.pp
            this.moveStats.type = name.type



            console.log(this.moveStats.name)
            console.log(this.moveStats.pb)
            console.log(this.moveStats.pp)
            console.log(this.moveStats.type)





            for (let i = 0; i < 1; i++) {
                if (this.moveStats.pp === 0) {
                } else {
                    this.moveStats--

                    this.oponent.life -= Math.floor(((this.pokemon.attack / this.oponent.defense) * this.moveStats.pb))
                    this.oponent.percent = ((this.oponent.life / this.oponent.maxLife) * 100)

                    if (this.oponent.life <= 0) {
                        this.oponent.life = 0
                    }

                    this.battle += 1
                    this.pokemon.move = this.moveStats.name
                }
            }
        },

        attackThunder() {
            if (this.thunder.pp === 0) {

            } else {
                this.thunder.pp -= 1


                this.oponent.life -= Math.floor(((this.pokemon.attack / this.oponent.defense) * 60))
                this.oponent.percent = ((this.oponent.life / this.oponent.maxLife) * 100)

                if (this.oponent.life <= 0) {
                    this.oponent.life = 0
                }

                this.battle += 1
                this.pokemon.move = "Thunder"
            }
        },

        attackTwister() {
            if (this.twister.pp === 0) {

            } else {
                this.twister.pp -= 1
                this.oponent.life -= Math.floor(((this.pokemon.attack / this.oponent.defense) * 100))
                this.oponent.percent = ((this.oponent.life / this.oponent.maxLife) * 100)
                if (this.oponent.life <= 0) {
                    this.oponent.life = 0
                }
                this.battle += 1
                this.pokemon.move = "Twister"
            }
        },

        attackCrunch() {
            if (this.crunch.pp === 0) {

            } else {
                this.crunch.pp -= 1
                this.oponent.life -= Math.floor(((this.pokemon.attack / this.oponent.defense) * 110))
                this.oponent.percent = ((this.oponent.life / this.oponent.maxLife) * 100)
                if (this.oponent.life <= 0) {
                    this.oponent.life = 0
                }
                var prob = Math.floor(Math.random() * 5)
                if (prob === 5) {
                    this.oponent.defense /= 1.2
                }
                this.battle += 1
                this.pokemon.move = "Crunch"
            }

        },

        attackBulkUp() {
            if (this.bulkUp.pp === 0) {

            } else {
                this.bulkUp.pp -= 1
                this.pokemon.attack *= 1.2
                this.pokemon.defense *= 1.2
                this.battle += 1
                this.pokemon.move = "Bulk Up"
            }
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
            this.oponent.percent = ((this.oponent.life / this.oponent.maxLife) * 100)
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
            this.pokemon.percent = ((this.pokemon.life / this.pokemon.maxLife) * 100)
            if (this.pokemon.life <= 0) {
                this.pokemon.life = 0
            }
            this.battle += 1
            this.oponent.move = "Shadow Ball"
        },

        attackDragonClaw() {
            this.pokemon.life -= Math.floor(((this.oponent.attack / this.pokemon.defense) * 110))
            this.pokemon.percent = ((this.pokemon.life / this.pokemon.maxLife) * 100)
            if (this.pokemon.life <= 0) {
                this.pokemon.life = 0
            }
            this.battle += 1
            this.oponent.move = "Dragon Claw"
        },
    }
}).mount('#app')