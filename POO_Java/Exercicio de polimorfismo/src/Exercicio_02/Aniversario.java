package Exercicio_02;

public class Aniversario extends CartaoWeb {

    // Métodos
    @Override
    public void showMenssage() {
        System.out.println("Feliz aniversário, " + this.destinatario + "!");
    }

    // Contrutor

    public Aniversario(String d) {
        this.destinatario = d;
    }
}
