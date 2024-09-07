const { createApp } = Vue;

createApp({
    data() {
        return {
            pokemon: { life: 100, maxLife: 300, name: 'seus pokemon',},
            oponent: { life: 124, maxLife: 331, name: 'Mewtwo', },
        }
    },
    methods: {
        
    }
}).mount('#app')