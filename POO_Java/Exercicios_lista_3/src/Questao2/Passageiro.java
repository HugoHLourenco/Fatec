package Questao2;

public class Passageiro {
    private int id;
    private String nome, cpf;

    public Passageiro() {
    }

    public Passageiro(int id, String nome, String cof) {
        this.id = id;
        this.nome = nome;
        this.cpf = cof;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getCof() {
        return cpf;
    }

    public void setCof(String cpf) {
        this.cpf = cpf;
    }

    @Override
    public String toString() {
        return "Passageiro {" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", cpf='" + cpf + '\'' +
                '}';
    }
}
