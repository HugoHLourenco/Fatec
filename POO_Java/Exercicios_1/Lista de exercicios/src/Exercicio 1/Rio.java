public class Rio {
    public String nome;
    public float nivel;
    public boolean poluido;

    //sem parâmetros
    public Rio() {
    }

    //com parâmetros
    public Rio(String nome, float nivel, boolean poluido) {
        this.nome = nome;
        this.nivel = nivel;
        this.poluido = poluido;
    }

    public void chover(float x){
        nivel += x;
    }

    public void ensolarar(float x){
        nivel -= x;
    }

    public void limpar(){
        if (poluido){
            poluido = false;
        } else if (!poluido){
            System.out.println("\nO rio já está limpo.");
        }
    }

    public void sujar(){
        if (!poluido) {
            poluido = true;
        } else if (poluido) {
            System.out.println("\nO rio já está sujo.");
        }
    }

    public void mostra(){
        System.out.println("\nO nome do rio é: " + this.nome +
                "\nO nível dele é: " + this.nivel +
                "\nEle está poluído? " + this.poluido);
    }
}
