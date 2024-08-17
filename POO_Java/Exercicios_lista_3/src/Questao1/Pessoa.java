package Questao1;

import java.util.ArrayList;

public class Pessoa {
    private int id;
    private String nome, usuario;
    private ArrayList<Mensagem> mensagens = new ArrayList<>();

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

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public ArrayList<Mensagem> getMensagens() {
        return mensagens;
    }

    public void setMensagens(ArrayList<Mensagem> mensagens) {
        this.mensagens = mensagens;
    }

    public void addMensagem(Mensagem msg){
        this.mensagens.add(msg);
    }

    public Pessoa(int id, String nome, String usuario) {
        this.setId(id);
        this.setNome(nome);
        this.setUsuario(usuario);
    }

    @Override
    public String toString() {
        return "Pessoa{" +
                "id=" + id +
                ", nome='" + nome + '\'' +
                ", usuario='" + usuario + '\'' +
                '}';
    }

    public void toStringMessages(){
        for (Mensagem i:mensagens){
            System.out.println(i);
        }
    }
}
