package Exercicio_03;

public class Controle {
    public static void main(String[] args) {
        Radio radio1 = new Radio(11, 50, "Hertz", "Massacration");
        Tv tv1 = new Tv(222, 40);

        // Rádio
        radio1.testaUnidade();
        // radio1.testaUnidade();
        radio1.setaVolume(90);
        radio1.trocarBanda("Guns'n Roses");
        radio1.trocarEstacao("KDS-T");
        System.out.println(radio1.toString());
        radio1.escutar();

        // TV
        tv1.testaUnidade();
        tv1.setaVolume(25);
        tv1.trocarCanal("SBT");
        System.out.println(tv1.toString());
        tv1.assistir();
    }
}
