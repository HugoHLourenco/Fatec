const {createApp} = Vue
createApp({
    data() {
        return {
            nome: "",
            sobrenome: '',
            lampada: false,
            mensagem: ''
        }
    },

    methods: {
        onOff(lampada) {
            this.lampada = !this.lampada
        },

    }
}).mount("#app")