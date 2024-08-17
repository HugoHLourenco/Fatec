public class Aluno {
    private int numeroAluno, idade;
    private String nome;
    private float p1, p2;

    public int getNumeroAluno() {
        return numeroAluno;
    }

    public void setNumeroAluno(int numeroAluno) {
        if (String.valueOf(numeroAluno).length() == 6){
            this.numeroAluno = numeroAluno;
        }
        else {
            System.out.println("O número não tem 6 dígitos de comprimento!!!");
        }

    }

    public int getIdade() {
        return idade;
    }

    public void setIdade(int idade) {
        if(idade >= 0){
            this.idade = idade;
        }
        else {
            System.out.println("A idade não pode ser negativa!!!");
        }

    }

    public java.lang.String getNome() {
        return nome;
    }

    public void setNome(java.lang.String nome) {
        if (nome.length() <= 30) {
            this.nome = nome;
        }
        else {
            System.out.println("O nome não pe ter mais de 30 caractéres");
        }
    }


    public float getP1() {
        return p1;
    }

    public void setP1(float p1) {
        if (p1 >= 0) {
            this.p1 = p1;
        }
        else {
            System.out.println("A nota da prova 1 não pode ser negativa!!!");
        }

    }

    public float getP2() {
        return p2;
    }

    public void setP2(float p2) {
        if (p2 >= 0) {
            this.p2 = p2;
        }
        else {
            System.out.println("A nota da prova 2 não pode ser negativa!!!");
        }
    }

    public void notaFinal() {
        float mediaFinal = (p1 + p2) / 2;
        System.out.println("A média final é: " + mediaFinal +
                "\n___________________________________________________________________");
    }

    public void dadosAluno(){
        System.out.println("\nNúmero: " + this.numeroAluno +
                "\nAluno: " + this.nome +
                "\nIdade: " + this.idade);
    }

    public Aluno(int numeroAluno, int idade, java.lang.String nome, float p1, float p2) {
        this.numeroAluno = numeroAluno;
        this.idade = idade;
        this.nome = nome;
        this.p1 = p1;
        this.p2 = p2;
    }

    public Aluno() {
    }
}
