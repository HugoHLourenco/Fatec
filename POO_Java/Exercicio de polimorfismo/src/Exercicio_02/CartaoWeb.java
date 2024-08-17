package Exercicio_02;

public abstract class CartaoWeb {

    // Atributos
    protected String destinatario;

    // Métodos
    public abstract void showMenssage();

    // Getters e Setters
    public String getDestinatario() {
        return destinatario;
    }

    public void setDestinatario(String destinatario) {
        this.destinatario = destinatario;
    }
}
