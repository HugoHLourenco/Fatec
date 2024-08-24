const {createApp} = Vue
createApp({
    data() {
        return {
            display: '0',
            numeroAtual: '',
            numeroAnterior: '',
            operador: null,
            numero: 0,
            divisor: 0,
            decimal: 0
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
            if (this.operador === "x") {
                this.numeroAtual = this.display
                Number(this.numeroAtual)
                this.display = this.numeroAtual * this.numeroAnterior
                this.numeroAtual = ""
                this.numeroAnterior = ""
            } else if (this.operador === "/") {
                this.numeroAtual = this.display
                Number(this.numeroAtual)
                this.divisor = this.numeroAnterior / this.numeroAtual
                if (this.divisor === parseInt(this.divisor)) {
                    this.display = this.divisor
                } else if (this.numeroAtual === '0') {
                    this.display = 'erro'
                } else {
                    this.display = this.divisor.toFixed(8)
                }
                this.numeroAtual = ""
                this.numeroAnterior = ""
            } else if (this.operador === "+") {
                this.numeroAtual = this.display
                Number(this.numeroAtual)
                this.display = +this.numeroAtual + +this.numeroAnterior
                this.numeroAtual = ""
                this.numeroAnterior = ""
            } else if (this.operador === "-") {
                this.numeroAtual = this.display
                Number(this.numeroAtual)
                this.display = this.numeroAnterior - this.numeroAtual
                this.numeroAtual = ""
                this.numeroAnterior = ""
            }
        },

        lidarNumero(bt) {
            if (this.display === "0" || this.display === 'erro') {
                this.display = bt
            } else {
                this.display += bt
            }
        },

        lidarOperador(bt) {
            switch (bt) {
                case "x":
                    this.operador = "x"
                    this.numeroAnterior = this.display
                    Number(this.numeroAnterior)
                    this.display = "0"
                    break
                case "/":
                    this.operador = "/"
                    this.numeroAnterior = this.display
                    Number(this.numeroAnterior)
                    this.display = "0"
                    break
                case "+":
                    this.operador = "+"
                    this.numeroAnterior = this.display
                    Number(this.numeroAnterior)
                    this.display = "0"
                    break
                case "-":
                    this.operador = "-"
                    this.numeroAnterior = this.display
                    Number(this.numeroAnterior)
                    this.display = "0"
                    break
            }
        },

        lidarClear() {
            this.display = '0'
            this.numeroAtual = ""
            this.numeroAnterior = ""
        },

        inverter() {
            this.numero = this.display
            Number(this.numero)
            this.numero = this.numero * -1
            this.display = this.numero
        },

        lidarDecimal() {
            this.decimal = this.display
            if (this.decimal.includes('.')) {
                this.display = this.decimal
            } else {
                this.decimal = this.display
                this.decimal += '.'
                this.display = this.decimal
            }
        }
    }
}).mount("#app")