package Exercicio_04;

public class Pedra extends Coisa {

    // Métodos
    public String quemSouEu() {
        return "Pedra";
    }

    public String compara(Coisa cp) {
        String tipo = cp.quemSouEu();
        if (tipo.equals("Pedra")) {
            return "Empatou";
        } else if (tipo.equals("Papel")) {
            return "Papel ganha de Pedra (envolve)";
        } else {
            return "Pedra ganha de Tesoura (quebra)";
        }
    }
}
