package Exercicios_05_06_e_07;

public class Cartao {

    // Atributos
    private Conta conta;
    private String senha;

    // Construtores
    public Cartao(Conta conta, String senha) {
        this.conta = conta;
        this.senha = senha;
    }

    // Métodos
    public boolean retirada(float valor, String senha) {
        if (this.senha.equals(senha)) {
            return conta.retira(valor);
        } else {
            System.out.println("Senha incorreta.");
            return false;
        }
    }

    public int saldo(String senha) {
        if (this.senha.equals(senha)) {
            return conta.saldo();
        } else {
            System.out.println("Senha incorreta.");
            return 0;
        }
    }

    public void alteraSenha(String senhaAntiga, String senhaNova) {
        if (this.senha.equals(senhaAntiga)) {
            this.senha = senhaNova;
            System.out.println("Senha alterada com sucesso.");
        } else {
            System.out.println("Senha incorreta. Não foi possível alterar a senha.");
        }
    }

    // getters and setters
    // ...
}
