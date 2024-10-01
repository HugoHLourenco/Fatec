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

    methods: {
        async callAPI(){
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${this.nextPage - 1}&limit=${385}`)

            const data = await response.json()

            const pokemonDetailsPromisses = data.results.map(async)
        }
    }
}).mount('#app');