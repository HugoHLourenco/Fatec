package Exercicios_05_06_e_07;

public class Conta {

    // Atributos
    protected String nome;
    protected float salario, saldo, limite;
    protected int numeroConta;

    // Construtores
    public Conta(String nome, float salario, float saldo, int numeroConta) {
    }

    public Conta(String nome, float salario, float saldo, float limite, int numeroConta) {
        this.nome = nome;
        this.salario = salario;
        this.saldo = saldo;
        this.limite = limite;
        this.numeroConta = numeroConta;
    }

    // Métodos
    public void deposita(float dep) {
        if (this.limite > this.salario) {
            System.out.println("Limite maior que o salario!!!");
        } else {
            this.saldo += dep;
        }
    }

    public boolean retira(float ret) {
        if (this.limite > this.salario) {
            System.out.println("Limite maior que o salario!!!");
        } else {
            if (ret > this.saldo || ret <= 0) {
                System.out.println("False");
            } else {
                this.saldo -= ret;
                System.out.println("True");
            }
        }
        return false;
    }

    public int saldo() {
        System.out.println("\nO saldo do cliente " + this.nome +
                "\né de R$" + this.saldo);
        return 0;
    }

    @Override
    public String toString() {
        return "\nNome " + nome +
                "\nsalario R$" + salario +
                "\nsaldo R$" + saldo +
                "\nlimite R$" + limite +
                "\nnumeroConta " + numeroConta +
                "\n____________________________________________________________";
    }

    // Getters e Setters

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public float getSalario() {
        return salario;
    }

    public void setSalario(float salario) {
        this.salario = salario;
    }

    public float getSaldo() {
        return saldo;
    }

    public void setSaldo(float saldo) {
        this.saldo = saldo;
    }

    public float getLimite() {
        return limite;
    }

    public void setLimite(float limite) {
        this.limite = limite;
    }

    public int getNumeroConta() {
        return numeroConta;
    }

    public void setNumeroConta(int numeroConta) {
        this.numeroConta = numeroConta;
    }
}
