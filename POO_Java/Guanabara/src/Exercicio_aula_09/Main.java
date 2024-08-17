package Exercicio_aula_09;

import java.util.List;

public class Main {
    public static void main(String[] args) {
        Pessoa[] p = new Pessoa[3];
        Livro[] l = new Livro[4];

        // Pessoas
        p[0] = new Pessoa("Pedrin", "M", 20);
        p[1] = new Pessoa("Leozim", "MikaGay", 21);
        p[2] = new Pessoa("Maria", "F", 22);

        // Livors
        l[0] = new Livro("E o vento levou", "Clarice Liz", 430, p[0]);
        l[1] = new Livro("Como cagar", "Thimetios Pinto", 209, p[1]);
        l[2] = new Livro("Mainkepfth", "Astolfo Riot", 10, p[2]);
        l[3] = new Livro("Os elementos de Euclídes", "Eclídes", 310, p[0]);

        // Ações
        l[0].abrir();
        l[0].folhear(30);
        System.out.printf(l[0].detalhes());

        l[1].abrir();
        l[1].avancarPg();
        System.out.println(l[1].detalhes());

        l[2].abrir();
        l[2].folhear(5);
        l[2].voltarPg();
        l[2].fechar();
        System.out.println(l[2].detalhes());
    }
}
