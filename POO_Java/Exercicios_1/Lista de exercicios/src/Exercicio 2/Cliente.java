public class Cliente {
    public int numeroConta, numeroAgencia;
    public String nome;
    public float saldo;

    public Cliente(int numeroConta, int numeroAgencia, String nome, float saldo) {
        this.numeroConta = numeroConta;
        this.numeroAgencia = numeroAgencia;
        this.nome = nome;
        this.saldo = saldo;
    }

    public void realizarDeposito(float valor){
        this.saldo += valor;
    }

    public void realizarSaque(float valor){
        this.saldo -= valor;
    }

    public void mostrar(){
        System.out.printf("\nN° da conta: " + this.numeroConta +
                "\nNome do cliente: " + this.nome +
                "\nSaldo: R$ " + this.saldo +
                "\n_______________________________________________");
    }
}
