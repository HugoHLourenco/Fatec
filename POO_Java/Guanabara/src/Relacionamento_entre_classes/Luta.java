package Relacionamento_entre_classes;

import java.util.Random;

public class Luta {
    // Atributos
        private Lutador desafiado, desafiante;
        private int rounds;
        private boolean aprovado;

    // Métodos
        public void marcarLuta(Lutador l1,Lutador l2){
            if (l1.getCategoria() == l2.getCategoria() && l1 != l2) {
                this.aprovado = true;
                this.desafiado = l1;
                this.desafiante = l2;
            } else {
                this.aprovado = false;
                this.desafiado = null;
                this.desafiante = null;
                System.out.println("A luta não pode acontecer!");
            }
        }

        public void lutar(){
            if (this.aprovado) {
                this.desafiado.apresentar();
                this.desafiante.apresentar();

                Random aleatorio = new Random();
                int vencedor = aleatorio.nextInt(3);
                switch (vencedor) {
                    case 0: // Empatar
                        System.out.println("A luta empatou!");
                        this.desafiado.empatarLuta();
                        this.desafiante.empatarLuta();
                        break;

                    case 1: // Desafiante vence
                        System.out.println("O desafiante "+ this.desafiante.getNome() + " vendeu!");
                        this.desafiante.ganharLuta();
                        this.desafiado.perderLuta();
                        break;

                    case 2: // Desafiado venceu
                        System.out.println("O desafiado " + this.desafiado.getNome() + " venceu!");
                        this.desafiante.perderLuta();
                        this.desafiado.ganharLuta();
                        break;
                }
            }
        }

    // Getters e Setters
    public Lutador getDesafiado() {
        return desafiado;
    }

    public void setDesafiado(Lutador desafiado) {
        this.desafiado = desafiado;
    }

    public Lutador getDesafiante() {
        return desafiante;
    }

    public void setDesafiante(Lutador desafiante) {
        this.desafiante = desafiante;
    }

    public int getRounds() {
        return rounds;
    }

    public void setRounds(int rounds) {
        this.rounds = rounds;
    }

    public boolean isAprovado() {
        return aprovado;
    }

    public void setAprovado(boolean aprovado) {
        this.aprovado = aprovado;
    }
}
