package Exercicio_03;

public class Produto {

    // Atributos
    protected int nSerial, volume;
    protected String valor;
    protected boolean testado;

    // Métodos
    public void testaUnidade() {
        if (!testado) {
            testado = true;
            if (Math.random() < 0.9) {
                this.valor = "Aprovado";
            } else {
                this.valor = "Reprovado";
            }
        } else {
            System.out.println("Produto já testado");
        }
    }

    public void setaVolume(int vol) {
        this.volume = vol;
    }

    @Override
    public String toString() {
        return "\nO produto de Número serial: " + nSerial +
                "\nVolume: " + volume +
                "\nResultado do teste: " + valor;
    }

    // Construtores
    public Produto() {
    }

    public Produto(int nSerial, int volume) {
        this.nSerial = nSerial;
        this.volume = volume;
        this.valor = "Não testado";
    }

    // Getters e Setters
    public int getnSerial() {
        return nSerial;
    }

    public void setnSerial(int nSerial) {
        this.nSerial = nSerial;
    }

    public int getVolume() {
        return volume;
    }

    public void setVolume(int volume) {
        this.volume = volume;
    }

    public String getValor() {
        return valor;
    }

    public void setValor(String valor) {
        this.valor = valor;
    }
}
