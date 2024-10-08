const { createApp } = Vue;
createApp({
    data() {
        return{
            pokemons: [],
            loading: true,
            searchText: '',
            nextPage: 1,
        }
    },
    created() {
        this.callAPI()
        window.addEventListener('scroll', this.handleScroll)
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll)
    },

    methods: {     
        async callAPI(){
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${(this.nextPage - 1) * 151}&limit=${151}`)
                
                const data = await response.json()
                
                const pokemonDetailsPromisses = data.results.map(async pokemon => this.fetchPokemonData(pokemon.url)) 

                console.log(pokemonDetailsPromisses)

                const pokemonDetails = await Promise.all(pokemonDetailsPromisses)

                this.pokemons = [...this.pokemons, ...pokemonDetails]
                this.nextPage++

                console.log(this.pokemons)



            } catch (error) {
                console.error(error)
            }
        },

        async fetchPokemonData(url) {
            try {
                const response = await fetch(url)
                const data = await response.json()
                return {
                    id: data.id,
                    name: data.name,
                    weight: data.weught,
                    types: data.types,
                    sprites: data.sprites,
                    showDetails: false,
                }
            } catch (e) {
                console.error(e)
            }
        }
    }
}).mount('#app');