const { createApp } = Vue;

createApp({
    data() {
        return {
            pokemon: { life: 100, name: 'DHUASHDUS', xp: 0 },
            oponent: { life: 124, name: 'Oponent Pokemon', maxLife: 331 },
        }
    },
    methods: {

    }
}).mount('#app')