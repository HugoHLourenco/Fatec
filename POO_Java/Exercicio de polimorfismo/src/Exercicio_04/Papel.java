package Exercicio_04;

public class Papel extends Coisa {

    // Métodos
    public String quemSouEu() {
        return "Papel";
    }

    public String compara(Coisa c) {
        String tipo = c.quemSouEu();
        if (tipo.equals("Papel")) {
            return "Empatou";
        } else if (tipo.equals("Tesoura")) {
            return "Tesoura ganha de paple (corta)";
        } else {
            return "Papel ganha de Pedra (envolve)";
        }
    }
}
