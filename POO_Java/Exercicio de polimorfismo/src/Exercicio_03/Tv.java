package Exercicio_03;

public class Tv extends Produto{

    // Atributos
    private String canal;

    // Métodos
    public void assistir() {
        System.out.println("\nVocê está assistindo o canal " + this.canal +
                "\n________________________________________________________");
    }

    public void trocarCanal(String parCanal) {
        this.canal = parCanal;
    }

    // Getters e Setters
    public String getCanal() {
        return canal;
    }

    public void setCanal(String canal) {
        this.canal = canal;
    }

    // Construtores

    public Tv(int nSerial, int volume) {
        super(nSerial, volume);
    }
}
