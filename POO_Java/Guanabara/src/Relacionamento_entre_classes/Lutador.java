package Relacionamento_entre_classes;

import java.util.List;

public class Lutador {
    // Atributos
    private String nome, nacionalidade, categoria;
    private int idade, vitorias, derrotas, empates;
    private float altura, peso;

    // Métodos
    public void apresentar(){
        System.out.println("Lutador: " + this.nome +
                "\nNacionalidade: " + this.nacionalidade +
                "\nAltura: " + this.altura +
                "\nPeso: " + this.peso +
                "\nCategoria: " + this.categoria +
                "\nIdade: " + this.idade +
                "\nVitórias: " + this.vitorias +
                "\nDerrotas: " + this.derrotas +
                "\nEmpates: " + this.empates +
                "\n------------------------------------------------------------");
    }

    public void status(){
        System.out.println("\nLutador: " + this.nome +
                "\nNacionalidade: " + this.nacionalidade +
                "\nCategoria: " + this.categoria +
                "\nVitórias: " + this.vitorias +
                "\nDerrotas: " + this.derrotas +
                "\nEmpates: " + this.empates);
    }

    public void ganharLuta(){
        this.vitorias += 1;
    }

    public void perderLuta(){
        this.derrotas += 1;
    }

    public void empatarLuta(){
        this.empates += 1;
    }

    // Construtores
    public Lutador() {
    }

    public Lutador(String nome, String nacionalidade, int idade, int vitorias, int derrotas, int empates, float altura, float peso) {
        this.nome = nome;
        this.nacionalidade = nacionalidade;
        this.idade = idade;
        this.vitorias = vitorias;
        this.derrotas = derrotas;
        this.empates = empates;
        this.altura = altura;
        this.setPeso(peso);
    }

    // Getters e Setters
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getNacionalidade() {
        return nacionalidade;
    }

    public void setNacionalidade(String nacionalidade) {
        this.nacionalidade = nacionalidade;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria() {
        if(this.peso <= 52.2){
            this.categoria = "Inválido";
        } else if(this.peso <= 70.3){
            this.categoria = "Peso Pena";
        } else if(this.peso <= 90.4){
            this.categoria = "Peso Médio";
        } else if (this.peso <= 122.1) {
            this.categoria = "Peso Pesado";
        } else {
            this.categoria = "Sobre Peso";
        }
    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        this.idade = idade;
    }

    public int getVitorias() {
        return vitorias;
    }

    public void setVitorias(int vitorias) {
        this.vitorias = vitorias;
    }

    public int getDerrotas() {
        return derrotas;
    }

    public void setDerrotas(int derrotas) {
        this.derrotas = derrotas;
    }

    public int getEmpates() {
        return empates;
    }

    public void setEmpates(int empates) {
        this.empates = empates;
    }

    public float getAltura() {
        return altura;
    }

    public void setAltura(float altura) {
        this.altura = altura;
    }

    public float getPeso() {
        return peso;
    }

    public void setPeso(float peso) {
        this.peso = peso;
        this.setCategoria();
    }
}
