package Exercicio_pratico_aula_5;

public class TestaContaBanco {
    public static void main(String[] args) {
        ContaBanco conta1 = new ContaBanco(100, "João da Silva");

        conta1.abrirConta("cc");
        conta1.depositar(300);
        conta1.sacar(200);
        conta1.pagarMensal();
        conta1.fecharConta();

        System.out.println(conta1.toString());
    }
}
