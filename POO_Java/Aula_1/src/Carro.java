public class Carro {
    // variaveis da classe
    public String marca, modelo, cor;
    public  int ano;
    public boolean motor;
    public float velAtual;

    //método construtor
    public Carro(String marca, String modelo, String cor, int ano, boolean motor, float velAtual){
        this.marca = marca;
        this.modelo  = modelo;
        this.cor = cor;
        this.ano = ano;
        this.motor = motor;
        this.velAtual = velAtual;
    }

    public void partida(){
        if (!this.motor) {
            this.motor = true;
        }

    }

    public void desligar(){
        if (this.motor) {
            this.motor = false;
            this.velAtual = 0;
        }
        this.mostra();
    }

    public void accel(int vel){
        this.velAtual = vel;
        if (!this.motor){
            this.velAtual = 0;
        }
        this.mostra();
    }

    public void frear(int velFrenagem){
        if (this.velAtual > velFrenagem){
            this.velAtual -= velFrenagem;
        } else if (velAtual < velFrenagem){
            this.velAtual = 0;
        }
        this.mostra();
    }
    public void mostra(){
        System.out.println("\nModelo: " + this.modelo +
                "\nMarca: " + this.marca + "\nCor: " + this.cor +
                "\nAno: " + this.ano + "\nMotor está ligado? " +
                this.motor + "\nA velocidade atual é: " + this.velAtual + " km/h" +
                "\n__________________________________________________________________");
    }

}
