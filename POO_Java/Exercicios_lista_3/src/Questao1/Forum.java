package Questao1;

import java.util.ArrayList;

public class Forum {
    private int id;
    private String name, url;
    private ArrayList<Mensagem> mensagens = new ArrayList<>();

    public Forum(int id, String name, String url) {
        this.setId(id);
        this.setName(name);
        this.setUrl(url);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void addMensagem(Mensagem msg){
        this.mensagens.add(msg);
    }

    @Override
    public String toString() {
        return "Forum{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", url='" + url + '\'' +
                '}';
    }

    public void toStringMessages() {
        for(Mensagem i:mensagens){
            System.out.println(i);
        }
    }
}
