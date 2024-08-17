public class TestaAluno {
    public static void main(String[] args) {
        Aluno obj1 = new Aluno (1, 20, "Jose", 8, 6);
        Aluno obj2 = new Aluno(2, 21,"Hamilton", 5, 5);

        obj1.notaFinal();
        obj1.dadosAluno();
        obj1.passou();
        obj2.notaFinal();
        obj2.dadosAluno();
        obj2.passou();

    }
}
