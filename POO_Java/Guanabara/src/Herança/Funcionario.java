package Herança;

public class Funcionario extends Pessoa{
    // Atributos
    private String setor;
    private boolean trabalhando;

    // Métodos
    public void mudarTrabalho(){
        this.trabalhando = !this.trabalhando;
    }

    // Getters e Setters
    public String getSetor() {
        return setor;
    }

    public void setSetor(String setor) {
        this.setor = setor;
    }

    public boolean isTrabalhando() {
        return trabalhando;
    }

    public void setTrabalhando(boolean trabalhando) {
        this.trabalhando = trabalhando;
    }
}
