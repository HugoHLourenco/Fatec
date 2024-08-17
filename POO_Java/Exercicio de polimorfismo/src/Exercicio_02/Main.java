package Exercicio_02;

import Exercicio_02.Aniversario;
import Exercicio_02.CartaoWeb;
import Exercicio_02.DiaDosNamorados;
import Exercicio_02.Natal;

public class Main {
    public static void main(String[] args) {
        CartaoWeb[] cartao = new CartaoWeb[4];
        cartao[0] = new DiaDosNamorados("Maria");
        cartao[1] = new Natal("João");
        cartao[2] = new Aniversario("Jorgim");
        cartao[3] = new DiaDosNamorados("Gabriel");

        // For
        for (CartaoWeb i : cartao) {
            i.showMenssage();
        }

        // O polimorfismo ocorre no momento em que o método showManssage() é
        // usado para fazer diferentes cartões a partir da classe abstrata CartãoWeb.
    }
}