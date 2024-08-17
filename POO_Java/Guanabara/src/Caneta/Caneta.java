package Caneta;

public class Caneta {
    public String cor,modelo;
    public float ponta, carga;
    public boolean tampada;

    public Caneta() {
    }

    public Caneta(String cor, String modelo, float ponta, float carga, boolean tampada) {
        this.cor = cor;
        this.modelo = modelo;
        this.ponta = ponta;
        this.carga = carga;
        this.tampada = tampada;
    }

    public String getCor() {
        return cor;
    }

    public void setCor(String cor) {
        this.cor = cor;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public float getPonta() {
        return ponta;
    }

    public void setPonta(float ponta) {
        this.ponta = ponta;
    }

    public float getCarga() {
        return carga;
    }

    public void setCarga(float carga) {
        this.carga = carga;
    }

    public boolean isTampada() {
        return tampada;
    }

    public void setTampada(boolean tampada) {
        this.tampada = tampada;
    }

    public void rabiscar(){
        if (this.tampada == true){
            System.out.println("Não é possível rabiscar. A caneta está tampada");
        } else {
            System.out.println("Rabiscando");
        }
    }

    public void tampar(){
        if(this.tampada == true){
            System.out.println("A caneta já está tampada");
        } else{
            this.tampada = true;
            System.out.println("Caneta foi tampada");
        }
    }

    public void desTampar(){
        if(this.tampada == false){
            System.out.println("A caneta já está destampada");
        } else{
            this.tampada = false;
            System.out.println("A caneta foi destampada");
        }
    }

    @Override
    public String toString() {
        return "\nCaneta{" +
                "cor='" + cor + '\'' +
                ", modelo='" + modelo + '\'' +
                ", ponta=" + ponta +
                ", carga=" + carga +
                ", tampada=" + tampada +
                '}';
    }
}
