package Heranca_02;

public class Main {
    public static void main(String[] args) {
        Visitante v1 = new Visitante();
        Aluno a1 = new Aluno();
        Bolsista b1 = new Bolsista();
        Professor p1 = new Professor();
        Tecnico t1 = new Tecnico();

        // Visitante
        v1.setNome("joao");
        v1.setIdade(20);
        v1.setSexo("M");

        System.out.println(v1.toString());

        // Aluno
        a1.setNome("Pedrin");
        a1.setIdade(21);
        a1.setSexo("M");
        a1.setCurso("ADS");
        a1.setMatricula(112);

        System.out.println(a1.toString());

        // Bolsista
        b1.setMatricula(11111);
        b1.setNome("Jorgim");
        b1.setBolsa(1200);
        b1.setSexo("MikaGay");
        b1.setIdade(49);
        b1.pagarMensalidade();

        System.out.println(b1.toString());

        // Professor
        p1.setNome("Claudin");
        p1.receberAumento(100);

        System.out.println(p1.toString());

        // Técnico
        t1.setRegistroProfissional("coisas");
        t1.praticar();

        System.out.println(t1.toString());
    }
}
