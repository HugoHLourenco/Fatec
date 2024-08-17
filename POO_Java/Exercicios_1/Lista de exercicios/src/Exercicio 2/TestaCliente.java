public class TestaCliente {
    public static void main(String[] args) {
        Cliente obj1 = new Cliente(123000, 234, "Fulano", 1200);
        Cliente obj2 = new Cliente(642001, 123, "Beltrano", 500);

        obj1.realizarDeposito(10000);
        obj1.realizarSaque(5000);
        obj1.mostrar();
        obj2.realizarDeposito(100);
        obj2.realizarSaque(800);
        obj2.mostrar();
    }
}
