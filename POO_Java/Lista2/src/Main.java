//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Aluno obj1 = new Aluno();
        obj1.setCodigo(10);
        obj1.setNota(10);
        obj1.setNome("jubiscleudo");
        System.out.println(obj1.toString());
        System.out.println("Código: " + obj1.getCodigo() +
                " Nota: " + obj1.getNota());

        Aluno obj2 = new Aluno(-10, 40, "Batista");
    }
}