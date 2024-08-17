package Exercicio_04;

public class Tesoura extends Coisa {

    // Métodos
    public String quemSouEu() {
        return "Tesoura";
    }

    public String compara(Coisa ct) {
        String tipo = ct.quemSouEu();
        if (tipo.equals("Tesoura")) {
            return "Empatou";
        } else if (tipo.equals("Pedra")) {
            return "Pedra ganha de tesoura (quebra)";
        } else {
            return "Tesoura ganha de Papel (Corta)";
        }
    }
}
