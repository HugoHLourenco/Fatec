package Exercicios_05_06_e_07;

public class ContaEspecial extends Conta {

    // Construtor
    public ContaEspecial(String nome, float salario, float saldo, int numeroConta) {
        super(nome, salario, saldo, numeroConta);
        this.limite = salario * 3;
    }
}