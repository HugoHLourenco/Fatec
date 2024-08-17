package Exercicio_aula_09;

public class Pessoa {

    // Atributos
    private String nome, sexo;
    private int idade;

    // Métodos
    public void fazerNiver(){
        this.idade = this.idade + 1 ;
    }

    // Construtores
    public Pessoa() {
    }

    public Pessoa(String nome, String sexo, int idade) {
        this.nome = nome;
        this.sexo = sexo;
        this.idade = idade;
    }

    // Getters e Setters
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }
}
