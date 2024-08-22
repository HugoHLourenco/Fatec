const  { createApp } = Vue;
createApp({
    data() {
        return {
            display: '0',
            numeroAtual: '',
            numeroAnterior: '',
            operador: null,
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

        lidarIgual(bt) {
            if (this.operador === "x") {
                    this.numeroAtual = this.display
                    Number(this.numeroAtual)
                    this.display = this.numeroAtual * this.numeroAnterior
                    this.numeroAtual = ""
                    this.numeroAnterior = ""
            } else if (this.operador === "/") {
                    this.numeroAtual = this.display
                    Number(this.numeroAtual)
                    this.display = this.numeroAtual / this.numeroAnterior
                    this.numeroAtual = ""
                    this.numeroAnterior = ""
            }
                case "+":
                    this.numeroAtual = this.display
                    Number(this.numeroAtual)
                    this.display = this.numeroAtual + this.numeroAnterior
                    this.numeroAtual = ""
                    this.numeroAnterior = ""
                    break
                case "-":
                    this.numeroAtual = this.display
                    Number(this.numeroAtual)
                    this.display = this.numeroAtual - this.numeroAnterior
                    this.numeroAtual = ""
                    this.numeroAnterior = ""
                    break
            }
        },

        lidarNumero(bt) {
            if (this.display === "0") {
                this.display = bt
            } else {
                this.display += bt
            }
        },

        lidarOperador(bt) {
            switch (bt) {
                case "x":
                    this.numeroAnterior = this.display
                    Number(this.numeroAnterior)
                    this.display = "0"
                    return "x"
                    break

            }
        },

        lidarClear() {
            this.display = '0'
            this.numeroAtual = ""
            this.numeroAnterior = ""
        },

        inverter() {
            this.display = 'inverteu'
        },

        lidarDecimal() {

        }



    }
}).mount("#app")