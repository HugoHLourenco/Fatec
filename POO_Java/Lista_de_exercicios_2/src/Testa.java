public class Testa {
    public static void main(String[] args) {
        Aluno obj1 = new Aluno();
        Aluno obj2 = new Aluno();

        // Aluno 1 (com getter e setter)
        obj1.setNumeroAluno(111111);
        obj1.setNome("João");
        obj1.setIdade(20);
        obj1.setP1(5);
        obj1.setP2(8);

        // Aluno 2 (sem getter e setter)
//        obj2.numeroAluno(123456);
//        obj2.nome("Maria");
//        obj2.idade(19);
//        obj2.p1(7.5f);
//        obj2.p2(6.3f);

        // Saída Aluno 1
        obj1.dadosAluno();
        obj1.notaFinal();

        // Saída Aluno 2
//        obj2.dadosAluno();
//        obj2.notaFinal();

        //sem getters e setters não é possível usar o código
    }
}
