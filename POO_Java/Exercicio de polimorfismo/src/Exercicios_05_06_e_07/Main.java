package Exercicios_05_06_e_07;

public class Main {
    public static void main(String[] args) {
        // Conta
        Conta c1 = new Conta("Joãozim", 1400, 2000, 400, 123);
        c1.deposita(300);
        // c1.retira(4000000);
        c1.retira(20);

        System.out.println(c1.toString());

        //Conta Especial
        ContaEspecial ce1 = new ContaEspecial("Maria", 2000, 1000, 234);
        ce1.retira(9999999);

        System.out.println(ce1.toString());

        // Cartão
        Cartao cartao1 = new Cartao(c1, "12345");
        cartao1.alteraSenha("12345", "54321");
    }
}
