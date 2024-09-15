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
            pokemonBar: false, // Verificador se a Pokemons Bar está ativa
            potion: true, // Contador da potion
            battle: 0, // Contador de turno de batalha
            runn: false, // Verificador de fuga
            moveStats: {
                name: "",
                pp: null,
                type: "",
                db: 0,
                modAtk: 1,
                modDef: 1,
            },

            // PP ----------------------------------------------------------------------
            thunder: {
                name: 'Thunder',
                pp: 10,
                type: "Eletric",
                db: 60,
                modAtk: 1,
                modDef: 1,
            },

            bulkUp: {
                name: 'Bulk Up',
                pp: 20,
                type: "Fighting",
                db: 0,
                modAtk: 1.2,
                modDef: 1.2,
            },

            crunch: {
                name: 'Crunch',
                pp: 15,
                type: "Dark",
                db: 100,
                modAtk: 1,
                modDef: 1,
            },

            twister: {
                name: 'Twister',
                pp: 20,
                type: "Dragon",
                db: 110,
                modAtk: 1,
                modDef: 1,
            },
        }
    },
    methods: { 
        // Abre o menu Fight ------------------------------------------------------------------------------
        fight() {
            this.fighting = !this.fighting
        },

        // Abre a Bag -----------------------------------------------------------------------------------------
        bag() {
            this.bagStatus = !this.bagStatus
        },

        // Foge da batalha ------------------------------------------------------------------------------------
        run() {
            this.runn = true
            this.battle = 8
        },

        // Abre o menu de Pokemons ------------------------------------------------------------------------------
        showPokemonBar() {
            this.pokemonBar = !this.pokemonBar
        },

        // Método que usa a Potion ------------------------------------------------------------------------------
        usePotion() {
            this.bagStatus = false
            this.potion = false
            this.pokemon.life = 351
            this.pokemon.percent = 99
            this.battle += 1
            this.pokemon.move = "potion"
        },

        // Botão que avança e verifica jogo -----------------------------------------------------------------------
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

        // 2º Botão que avança e verifica jogo -----------------------------------------------------------------------
        next2() {
            if (this.pokemon.life === 0) {
                this.pokemon.percent = 0
                this.battle = 7
            } else {
                this.battle = 0
            }
        },

        // Botão que recarrega á página ------------------------------------------------------------------------------
        btnRestart() {
            window.location.reload();
        },

        // Mostra a quantidade de PPs na HotBar ------------------------------------------------------------------------
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

        // Limpa os status da HotBar -----------------------------------------------------------------------------------
        clearDiv() {
            this.moveStats = ""
        },

    // Pokemon Ataques -------------------------------------------------------------
        attack(name) {
            switch (name) {
                case 'thunder':
                    this.moveStats = this.thunder
                    break
                case 'twister':
                    this.moveStats = this.twister
                    break
                case 'crunch':
                    this.moveStats = this.crunch
                    break
                case 'bulkUp':
                    this.moveStats = this.bulkUp
                    break
            }

            if (this.moveStats.pp === 0) {

            } else {
                this.moveStats.pp --

                this.oponent.life -= Math.floor(((this.pokemon.attack / this.oponent.defense) * this.moveStats.db))
                this.oponent.percent = ((this.oponent.life / this.oponent.maxLife) * 100)
                this.pokemon.attack *= this.moveStats.modAtk
                this.pokemon.defense *= this.moveStats.modDef

                if (this.oponent.life < 0) {
                    this.oponent.life = 0
                }

                this.battle ++
                this.pokemon.move = this.moveStats.name
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