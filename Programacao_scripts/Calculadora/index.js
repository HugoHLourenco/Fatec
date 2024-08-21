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

        lidarIgual(numAnterior, numAtual) {

        },

        lidarNumero(bt) {
            this.display += bt
        },

        lidarOperador(bt) {
            if (bt == "x") {
                this.numeroAnterior = this.display;
                this.display = '0';
                this.numeroAtual = this.display;
                this.numeroAnterior

            }
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