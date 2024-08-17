package Caneta;

public class Main {
    public static void main(String[] args) {
        Caneta caneta1 = new Caneta("azul", "BIC", 0.5f,100,true);
        Caneta caneta2 = new Caneta("Rosa", "faber Castle", 0.3f, 80, false);

        caneta1.setCarga(20);
        caneta1.setCor("Verde");
        caneta1.desTampar();

        caneta2.tampar();

        System.out.println(caneta1.toString() + caneta2.toString());
    }
}