package Questao2;

public class Main {
    public static void main(String[] args) {
        Passageiro pass1 = new Passageiro(1,"Joao da Silva", "123456789-0");
        Voo voo1 = new Voo(111, "México","Guatemala");
        Voo voo2 = new Voo(112,"China" , "Butão");

        Reserva res1 = new Reserva(11, "22/02/2022", pass1, voo1);
        Reserva res2 = new Reserva(12,"24/11/2024", pass1,voo2);

        System.out.println(res1.toString());
        System.out.println(res2.toString());
    }
}
