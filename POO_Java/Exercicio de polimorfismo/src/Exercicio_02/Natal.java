package Exercicio_02;

public class Natal extends CartaoWeb {

    // Métodos
    @Override
    public void showMenssage() {
        System.out.println("Feliz natal, " + this.destinatario + "!");
    }

    // Costrutor
    public Natal(String d) {
        this.destinatario = d;
    }
}
