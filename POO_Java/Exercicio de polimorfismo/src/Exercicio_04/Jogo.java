package Exercicio_04;

public class Jogo {
    public static void main(String[] args) {
        Coisa[] coisas = new Coisa[3];
        coisas[0] = new Pedra();
        coisas[1] = new Papel();
        coisas[2] = new Tesoura();

        for (int i = 0; i < 15; i++) {
            int indice = (int) (Math.random() * 3);
            Coisa c1 = coisas[indice];
            indice = (int) (Math.random() * 3);
            Coisa c2 = coisas[indice];
            System.out.println(c1.quemSouEu() + " x " + c2.quemSouEu() + " = " + c1.compara(c2));
        }
    }
}
