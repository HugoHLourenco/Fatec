public class TestaProduto {
    public static void main(String[] args) {
        Produto obj1 = new Produto(123, 50, "Batata", 10);
        Produto obj2 = new Produto();

        //com parâmetros
        obj1.comprar(10);
        obj1.vender(5);
        obj1.subir(2);
        obj1.descer(1);
        obj1.mostra();
        //sem parâmetros
        obj2.comprar(10);
        obj2.vender(5);
        obj2.subir(2);
        obj2.descer(1);
        obj2.mostra();

    }
}
