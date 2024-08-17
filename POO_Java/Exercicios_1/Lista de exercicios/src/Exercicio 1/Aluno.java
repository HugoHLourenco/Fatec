public class Aluno {
    public  int numeroAluno, idade;
    public String nome;
    public float p1, p2;

    public Aluno(int numeroAluno, int idade, java.lang.String nome, float p1, float p2) {
        this.numeroAluno = numeroAluno;
        this.idade = idade;
        this.nome = nome;
        this.p1 = p1;
        this.p2 = p2;
    }

    public void notaFinal(){
        float nf = (p1 + p2)/2;
        System.out.println("\nA média final de " + this.nome + " é: " + nf);
    }

    public void dadosAluno(){
        System.out.println("\nN° do aluno: " + this.numeroAluno +
                            "\nNome do aluno: " + this.nome +
                            "\nIdade: " + this.idade);
    }

    public void passou() {
        if ((this.p1 + this.p2) / 2 < 6) {
            System.out.println("\nO aluno "+ this.nome + " REPROVOU!!!");
        } else {
            System.out.println("\nO aluno "+ this.nome + " PASSOU!!!");
        }
    }
}
