const  { createApp } = Vue;
createApp({
    data() {
        return {
            display: '0',
            numeroAtual: '',
            numeroAnterior: '',
            operador: null,
            n1: 0,
            n2: 0,
            res: ""
        }

    },
    methods: {
        lidarBotao(bt) {
            switch (bt) {
                case "x":
                case '/':
                case '+':
                case '-':
                    this.lidarOperador(bt)
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
                case '+/-':
                    this.inverter()
                    break
                default:
                    this.lidarNumero(bt)
            }
        },

        lidarIgual() {
            
            }

        },

        lidarNumero(bt) {
            this.display += bt
        },

        lidarOperador(bt) {

        },

        lidarClear() {
            this.display = '0'
        },

        inverter() {
            this.display = 'inverteu'
        },

        lidarDecimal() {

        }



    }
}).mount("#app")