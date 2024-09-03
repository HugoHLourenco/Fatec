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
        verificar() {
            if(this.mensagem.toLowerCase() === "desligar") {
                this.lampada = false;
            } else if(this.mensagem.toLowerCase() === "acender") {
                this.lampada = true;
            }
        }

    }
}).mount("#app")