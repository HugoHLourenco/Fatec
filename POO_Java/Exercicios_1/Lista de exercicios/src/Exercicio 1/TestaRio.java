public class TestaRio {
    public static void main(String[] args) {
        Rio obj1 = new Rio("Rio Negro", 10, false);
        Rio obj2 = new Rio();
        Rio obj3 = new Rio("Rio Solimões", 8, true);

        obj1.chover(5);
        obj1.ensolarar(3);
        obj1.sujar();
        obj1.mostra();
        obj3.chover(5);
        obj3.ensolarar(3);
        obj3.limpar();
        obj3.mostra();
        //sem parâmetros
        obj2.chover(10);
        obj2.ensolarar(5);
        obj2.sujar();
        obj2.mostra();

    }
}
