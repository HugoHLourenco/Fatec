//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Carro obj1 = new Carro("Fiat", "Palio", "branca", 2012, false, 0);

        Carro obj2 = new Carro("GM", "Onix", "prata", 2018, false, 0);

        Carro obj3 = new Carro("Toyota", "Corolla","cinza", 2010,false, 0);

        //Ligar o carro
        obj1.partida();
        obj2.partida();
        obj3.partida();
        //Acelerar o carro
        obj1.accel(100);
        obj2.accel(20);
        obj3.accel(30);

        //Iniciar processo de frenagem
        obj1.frear(10);
        obj2.frear(1111);
        obj3.frear(20);

        //Desligar
        obj1.desligar();
        obj2.desligar();
        obj3.desligar();

    }
}