const  { createApp } = Vue;
createApp({
    data() {
        return {
            display: '0',
            numeroAtual: '',
            numeroAnterior: '',
            operador: null
        }

    },
    methods: {
        lidarBotao(botao) {
            switch (botao) {
                case "x":
                case '/':
                case '+':
                case '-':
                    this.lidarOperador(botao)
                    break
                case ',':
                    this.lidarDecimal()
                    break
                case '=':
                    this.lidarIgual()
                    break
                case 'AC':
                    this.lidarClear()
                    break
                default:
                    this.lidarNumero(botao)
            }
        },
        lidarNumero(bt) {
            this.display += bt
        },

        lidarClear() {
            this.display = '0'
        },

    }
}).mount("#app")