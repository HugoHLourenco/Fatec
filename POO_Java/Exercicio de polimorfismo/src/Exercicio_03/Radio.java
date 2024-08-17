package Exercicio_03;

public class Radio extends Produto{

    // Atributos
    private String estacao, banda;

    // Métodos
    public void escutar(){
        System.out.println("\nOuindo a estação " + this.estacao +
                "\nE a banda " + this.banda +
                "\n________________________________________________________________");
    }

    public void trocarEstacao(String varEst){
        this.estacao = varEst;
    }

    public void trocarBanda(String varBanda) {
        this.banda = varBanda;
    }

    // Getters e Setters
    public String getEstacao() {
        return estacao;
    }

    public void setEstacao(String estacao) {
        this.estacao = estacao;
    }

    public String getBanda() {
        return banda;
    }

    public void setBanda(String banda) {
        this.banda = banda;
    }

    // Construtores

    public Radio(int nSerial, int volume, String estacao, String banda) {
        super(nSerial, volume);
        this.estacao = estacao;
        this.banda = banda;
    }
}
