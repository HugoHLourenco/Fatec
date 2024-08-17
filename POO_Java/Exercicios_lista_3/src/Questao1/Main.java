package Questao1;

public class Main {
    public static void main(String[] args) {
        Pessoa obj1 = new Pessoa(1, "Joao", "UserJoao");
        Mensagem txtJoao = new Mensagem(2, "txt do Joao");
        Forum objForum = new Forum(3, "Forum", "http://Forum");

        obj1.addMensagem(txtJoao);
        System.out.println(obj1.toString());
        obj1.toStringMessages();
        objForum.addMensagem(txtJoao);

        System.out.println(objForum.toString());
        objForum.toStringMessages();
    }
}