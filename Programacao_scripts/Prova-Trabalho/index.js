const  {createApp} = Vue;

createApp({
    data() {
        return {
            pokemon: {life: 100, name:'', xp: 0},
            oponent: {life: 100, name:'', xp: 0},
        }
    },
    methods: {

    }
}).mount('#app')