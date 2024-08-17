package Relacionamento_entre_classes;

import java.io.Flushable;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Lutador l[] = new Lutador[6];
         l[0] = new Lutador("Popó", "brasileiro", 51, 46, 4, 2, 1.7f, 80);
         l[1] = new Lutador("Bambam", "brasileiro", 38, 0, 1, 0, 1.95f, 110);
         l[2] = new Lutador("Anderson", "Brasil", 52, 45, 10, 1, 1.78f, 80.6f);
         l[3] = new Lutador("Bruce Lee", "China", 50, 121, 2, 0, 1.68f, 63.8f);
         l[4] = new Lutador("John", "EUA", 47, 63, 12, 6, 1.87f, 119.8f);
         l[5] = new Lutador("Muchacho", "México", 42, 222, 0, -2, 2.01f, 121);

        Luta luta1 = new Luta();
        luta1.marcarLuta(l[0], l[2]);
        luta1.lutar();
    }
}
