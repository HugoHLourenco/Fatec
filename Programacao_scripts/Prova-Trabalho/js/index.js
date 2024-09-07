const { createApp } = Vue;

createApp({
    data() {
        return {
            pokemon: { life: 100, maxLife: 300, name: 'Rayquaza',},
            oponent: { life: 124, maxLife: 331, name: 'Giratina', },
            fighting: false,
            bag: false,
        }
    },
    methods: {
        fight(fighting){
            this.fighting = !this.fighting
            
        }
    }
}).mount('#app')